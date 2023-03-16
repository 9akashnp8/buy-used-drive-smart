from pydantic import BaseModel

class SearchUrlModel(BaseModel):
    url: str