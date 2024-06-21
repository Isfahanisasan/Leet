from fastapi import FastAPI, Request 
from pydantic import BaseModel
from typing import Dict, Any 
import asyncio
import heapq
from LLMgenerator import LLMgenerator

app = FastAPI() 

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

# one for each solution
@app.post("/query")
async def handle_query(request: QueryRequestSchema):
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

if __name__ == "__main__":
    import uvicorn 
    uvicorn.run(app, host="localhost", port=8000)

