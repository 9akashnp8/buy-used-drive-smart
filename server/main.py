import sentry_sdk
from decouple import config
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from functions import get_analyzed_data
from models import SearchUrlModel

sentry_sdk.init(
    dsn=config("SENTRY_DSN"),
    traces_sample_rate=1.0,
)

app = FastAPI()

allowed_origins = [
    "http://localhost:5173",
    "https://buds.akashnp.dev"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/api")
def root():
    return {"message": "BUDS Root"}

@app.post("/api/analyzer")
def analyzed_url(payload: SearchUrlModel):
    search_url = payload.url
    data = get_analyzed_data(url=search_url)
    return data