from fastapi import FastAPI 
import requests
from pydantic import BaseModel 

class QueryRequestSchema(BaseModel):
    query: str 
    priority: int 

app = FastAPI()

LLM_ENDPOINT = "http://localhost:8000/query"

@app.post("/process")
async def process_message(request: QueryRequestSchema):
    headers = {"Content-Type": "application/json"}
    response = requests.post(LLM_ENDPOINT, json={"query": request.query, "priority": request.priority}, headers=headers)
    print(request)
    return response.json()

if __name__ == '__main__': 
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=5000)

