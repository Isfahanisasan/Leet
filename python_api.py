from fastapi import FastAPI, Request, HTTPException, UploadFile, File
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Dict, Any 
import asyncio
import heapq
from LLMgenerator import LLMgenerator
from fastapi.middleware.cors import CORSMiddleware
import ocrmypdf
import tempfile
import io

app = FastAPI() 


# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Allow OPTIONS method
    allow_headers=["*"],
)


# llm_generator = LLMgenerator()


# # define a priority queue to service LLM queries
# class PriorityQueue: 
#     def __init__(self) -> None:
#         self._queue = []
#         self._index = 0
    
#     def push(self, item, priority):
#         heapq.heappush(self._queue, (priority, self._index, item)) 
#         self._index += 1

#     def pop(self): 
#         return heapq.heappop(self._queue)[-1]


# # a global shared priority queue and condition variable for synchronization 
# queue = PriorityQueue()
# condition = asyncio.Condition()

# class QueryRequestSchema(BaseModel):
#     query: str 
#     priority: int 

# # one for each solution
# @app.post("/query")
# async def handle_query(request: QueryRequestSchema):
#     # print(request)
#     async with condition: 
#         queue.push(request, request.priority)
#         condition.notify()

#     response = await process_query()
#     return {"response": response}

# async def process_query(): 
#     async with condition:
#         # waits until there's a request
#         while len(queue._queue) == 0:
#             await condition.wait()
        
#         request = queue.pop() 
    
#     response = llm_generator.generate_text(request.query)
#     return response


@app.post("/ocr")
async def handle_ocr(file: UploadFile = File(...)):
    try: 
        with tempfile.NamedTemporaryFile(delete=True) as input_pdf:
            input_pdf.write(await file.read())
            print(f"PDF saved to {input_pdf.name}")
            print(f"received data is {file}")
            input_pdf_name = input_pdf.name

            # Create a temp file for the OCRed PDF
            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as output_pdf:
                output_pdf_name = output_pdf.name

                # Run OCR on the input PDF and skip text 
                ocrmypdf.ocr(input_pdf_name, output_pdf_name, deskew=True, skip_text=True)

                print(f"OCRed PDF saved to {output_pdf_name}")
                return FileResponse(output_pdf_name, media_type="application/pdf", filename="OCRed.pdf")
            
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

if __name__ == "__main__":
    import uvicorn 
    uvicorn.run(app, host="localhost", port=8000)

