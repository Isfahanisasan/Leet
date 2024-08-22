import transformers
import torch
from huggingface_hub import login




login("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")

class LLMgenerator: 
    def __init__(self, device="auto", model_id="meta-llama/Meta-Llama-3-8B-Instruct"):
        self.model_id = model_id
        self.pipeline = None
        self.messages = []
        self.device = device 
        self._initialize_pipeline()

    
    def _initialize_pipeline(self):
        config = transformers.AutoConfig.from_pretrained(self.model_id)
        # config.use_flash_attention = True
        # model = transformers.AutoModelForCausalLM.from_pretrained(self.model_id, config=config)

        self.pipeline = transformers.pipeline(
            "text-generation",
            model=self.model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map=self.device,
        )

    def set_messages(self, messages):
        self.messages = messages
    
    def add_message(self, message):
        self.messages.append(message)
    
    def generate_text(self, prompt): 
        self.messages.append({"role": "user", "content": prompt})
        terminators = [
            self.pipeline.tokenizer.eos_token_id,
            self.pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")
        ]

        outputs = self.pipeline(
            self.messages,
            max_new_tokens= 10000,
            eos_token_id=terminators,
            # uses schotastic sampling, no greedy 
            do_sample=True,
            # randomness in text generated, lower temperature has more similarity to training data
            temperature=0.6,
            # only sample from the top 90% of the probabilty distribution 
            top_p=0.9,
        )
        return outputs[0]["generated_text"][-1]


if __name__ == "__main__":
    llama_gen = LLMgenerator()
    # for prompt engineering, use role "system" to provide instructions to the model
    llama_gen.set_messages([
        {"role": "system",
        "content": "You are a medical devices corporate chatbot who always responds in scientific plain English. Be concise."}
    ])
    prompt = "Explain heart catheters"
    print(llama_gen.generate_text(prompt))