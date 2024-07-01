from fastapi import FastAPI 
import requests
from pydantic import BaseModel
import os

app = FastAPI()

LLM_ENDPOINT = "http://localhost:8000/query"

@app.post('/generateTemplate')
async def generate_template():
    #load the base template
    with open("./texfiles/base_template.tex", "r") as f:
        base_template = f.read()
    return {'template' : base_template}
    

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000) 