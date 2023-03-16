from fastapi import FastAPI

from functions import get_analyzed_data
from models import SearchUrlModel

app = FastAPI()

@app.get("/")
def root():
    return {"message": "BUDS Root"}

@app.post("/analyzer")
def analyzed_url(url: SearchUrlModel):
    data = get_analyzed_data(url=url)
    return data