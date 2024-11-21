import requests as r
import json
import datetime
from keys import CONGRESS_API

def get_current_congress() -> dict:
    return r.get(f"https://api.congress.gov/v3/congress/current?api_key={CONGRESS_API}").json()

def get_all_bills(start_date: datetime.datetime, end_date: datetime.datetime=None, congress: int=None, **options) -> dict:
    path = f"https://api.congress.gov/v3/bill/{str(congress)}"