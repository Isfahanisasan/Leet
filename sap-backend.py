from fastapi import FastAPI 
import requests
from pydantic import BaseModel
import os


# converting the SAP to md before sending it to LLM
class SectionContentGeneration(BaseModel):
    section: str
    query: str
    dom: str 

app = FastAPI()

LLM_ENDPOINT = "http://localhost:8000/query"

@app.post('/generateTemplate')
async def generate_template():
    #load the base template
    with open("./base_html.html", "r") as f:
        base_template = f.read()
    return {'template' : base_template}


@app.post('/populateSection')
async def generate_query(request: SectionContentGeneration):
    # send the query to LLM with converted 
    headers = {'Content-Type': 'application/json'}
    query = "For the " + request.section + " section, " + request.query + "."
    response = requests.post(LLM_ENDPOINT, json={"query": query, "priority": 1}, headers=headers) 
    return response.json()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000) 