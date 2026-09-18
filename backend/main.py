
from fastapi import FastAPI

app = FastAPI()

@app.get("/status")
async def status():
    return {"project": "zero-trust-service-mesh", "status": "ok"}
