
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
import os
import PyPDF2


app = FastAPI()




# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Allow OPTIONS method
    allow_headers=["*"],
)




llm_generator = LLMgenerator()




# define a priority queue to service LLM queries
class PriorityQueue:
    def __init__(self) -> None:
        self._queue = []
        self._index = 0
   
    def push(self, item, priority):
        heapq.heappush(self._queue, (priority, self._index, item))
        self._index += 1


    def pop(self):
        return heapq.heappop(self._queue)[-1]




# a global shared priority queue and condition variable for synchronization
queue = PriorityQueue()
condition = asyncio.Condition()


class QueryRequestSchema(BaseModel):
    query: str
    priority: int






class QueryPDFRequestSchema(BaseModel):
    query: str
    fileName: str
    highlightedText: str
    pageNumber: int
    priority: int




# one for each solution
@app.post("/query")
async def handle_query(request: QueryRequestSchema):
    # print(request)
    async with condition:
        queue.push(request, request.priority)
        condition.notify()


    response = await process_query()
    return {"response": response}


async def process_query():
    async with condition:
        # waits until there's a request
        while len(queue._queue) == 0:
            await condition.wait()
       
        request = queue.pop()
   
    response = llm_generator.generate_text(request.query)
    return response






@app.post("/queryPDF")
async def handle_query(request: QueryPDFRequestSchema):
    print(request)
    async with condition:
        queue.push(request, request.priority)
        condition.notify()




    # open the pdf file and extract the text from the page, the files are in /tmp
    with open(f"/tmp/{request.fileName}", "rb") as file:
        pdf = PyPDF2.PdfReader(file)
        # page = pdf.pages[request.pageNumber - 1]
        # text = page.extract_text()
        # extract the text from all of the document
        text = ""
        for page in pdf.pages:
            text += page.extract_text()
        # clean the text
        text = text.replace("\n", " ")
        # replace multiple spaces with a single space
        text = " ".join(text.split())






    print(text)
   
    # add the text to the messages by doing a system message
    llm_generator.set_messages([{"role": "system", "content": "Respond CONCISELY and ONLY according to the following context: " + text}])


    if request.highlightedText and request.highlightedText != "":
        llm_generator.set_messages([{"role": "system", "content": "User highlighted the following text: " + request.highlightedText}])




    response = await process_query()
    return {"response": response}


async def process_query():
    async with condition:
        # waits until there's a request
        while len(queue._queue) == 0:
            await condition.wait()
       
        request = queue.pop()


   
    response = llm_generator.generate_text(request.query)


    return response




@app.post("/ocr")
async def handle_ocr(file: UploadFile = File(...)):
    try:
        with tempfile.NamedTemporaryFile(delete=True, suffix='.pdf') as input_pdf:
            input_pdf.write(await file.read())
            print(f"PDF saved to {input_pdf.name}")
            input_pdf_name = input_pdf.name
            print(file)




            ocr_filename = f"ocr_{file.filename}"
            ocr_filepath = os.path.join(tempfile.gettempdir(), ocr_filename)
           
            ocrmypdf.ocr(input_pdf_name, ocr_filepath, deskew=True, skip_text=True, jobs=4)


            print(f"OCRed PDF saved to {ocr_filepath}")
            return FileResponse(ocr_filepath, media_type="application/pdf", filename=ocr_filename)
           
   
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
   




   


@app.get("/getFiles")
async def get_files():
    # only the files that start with "ocr_" and end with ".pdf"
    files = [f for f in os.listdir(tempfile.gettempdir()) if f.startswith("ocr_") and f.endswith(".pdf")]
    print(files)
    return files




@app.get("/getFile/{filename}")
async def get_file(filename: str):
    filepath = os.path.join(tempfile.gettempdir(), filename)
    print(filepath)
    return FileResponse(filepath, media_type="application/pdf", filename=filename)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=7000)
