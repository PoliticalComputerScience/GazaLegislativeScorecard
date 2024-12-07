import requests
from datetime import datetime
import pandas as pd
import os
from typing import List, Dict, Any

class ProQuestSenateAPI:
    def __init__(self, api_key: str):
        """
    
        
        Args:
            api_key (str): Your ProQuest API key
        """
        self.api_key = api_key
        self.base_url = "https://api.proquest.com/congressional/v1"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Accept": "application/json"
        }

    def search_bills(self, start_date: str, end_date: str, keywords: List[str]) -> Dict[str, Any]:
        """
        Search for bills within a date range containing specific keywords
        
        Args:
            start_date (str): Start date in YYYY-MM-DD format
            end_date (str): End date in YYYY-MM-DD format
            keywords (List[str]): List of keywords to search for
        
        """
        endpoint = f"{self.base_url}/bills/search"
        
        # Convert keywords list to ProQuest query syntax
        keyword_query = " OR ".join([f'"{kw}"' for kw in keywords])
        
        params = {
            "q": keyword_query,
            "dateFrom": start_date,
            "dateTo": end_date,
            "chamber": "Senate",
            "format": "json"
        }
        
        response = requests.get(endpoint, headers=self.headers, params=params)
        print("HTTP Status Code:", response.status_code)
        print("Response Headers:", response.headers)
        print("Response Content:", response.text)
        return response.json()

    def get_vote_details(self, bill_id: str) -> Dict[str, Any]:
        """
        Get voting details for a specific bill
        
        Args:
            bill_id (str): The ProQuest bill ID
            
        Returns:
            Dict containing vote details
        """
        endpoint = f"{self.base_url}/bills/{bill_id}/votes"
        response = requests.get(endpoint, headers=self.headers)
        return response.json()

    def get_bill_sponsors(self, bill_id: str) -> Dict[str, Any]:
        """
        Get sponsor information for a specific bill
        
        Args:
            bill_id (str): The ProQuest bill ID
            
        Returns:
            Dict containing sponsor information
        """
        endpoint = f"{self.base_url}/bills/{bill_id}/sponsors"
        response = requests.get(endpoint, headers=self.headers)
        return response.json()

    def analyze_gaza_related_bills(self, start_date: str, end_date: str) -> pd.DataFrame:
        keywords = ["Gaza", "Israel", "Palestinian", "Hamas", "Middle East aid",
                "humanitarian assistance", "military aid"]
    
        # Debug the raw bills response
        bills = self.search_bills(start_date, end_date, keywords)
        print("Raw API Response (Bills):", bills)
    
        results = []
        for bill in bills.get('bills', []):
            print("Processing Bill:", bill)  # Debug individual bill
        
            bill_id = bill['bill_id']
        
        # Get vote details
            votes = self.get_vote_details(bill_id)
            print(f"Votes for Bill ID {bill_id}:", votes)
        
        # Get sponsor information
            sponsors = self.get_bill_sponsors(bill_id)
            print(f"Sponsors for Bill ID {bill_id}:", sponsors)
        
            results.append({
                'bill_id': bill_id,
                'title': bill.get('title', ''),
                'description': bill.get('description', ''),
                'introduction_date': bill.get('introduced_date', ''),
                'status': bill.get('status', ''),
                'sponsors': [s.get('name') for s in sponsors.get('sponsors', [])],
                'vote_date': votes.get('vote_date', ''),
                'yea_votes': len([v for v in votes.get('votes', []) if v['vote'] == 'YEA']),
                'nay_votes': len([v for v in votes.get('votes', []) if v['vote'] == 'NAY']),
                'voting_details': votes.get('votes', [])
            })
    
    # Debug the final DataFrame
        print("Final Results:", results)
    
        return pd.DataFrame(results)


# One Try
if __name__ == "__main__":
    api_key = "659b3683-03ba-42fb-9f13-88d8a892e185"
    client = ProQuestSenateAPI(api_key)
    
    # Analysis for June-August 2024
    df = client.analyze_gaza_related_bills("2023-06-16", "2024-08-31")
    
    # Display summary of bills
    print(df)