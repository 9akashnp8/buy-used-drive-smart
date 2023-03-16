from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from functions import get_analyzed_data
from models import SearchUrlModel

app = FastAPI()

allowed_origins = [
    "http://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "BUDS Root"}

@app.post("/analyzer")
def analyzed_url(payload: SearchUrlModel):
    search_url = payload.url
    data = get_analyzed_data(url=search_url)
    return data