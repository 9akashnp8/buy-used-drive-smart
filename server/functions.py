from typing import List
from olx_scraper.scraper import Scraper
from olx_scraper.analyzer import Analyzer

def initialize_analyzer(url: str) -> Analyzer:
    """scrapes given url and generates Analyzer object containing the scraped data in a pandas
    DataFrame format.

    Args:
        url (str): url to scrape, must be a car/bike url for it to work as expected.

    Returns:
        Analyzer: object containting methods to analyze and extract insights on scraped data.
    """
    scraper = Scraper()
    scraped_data = scraper.scrape(input_url=url)
    analyzer = Analyzer(scraped_data=scraped_data)
    return analyzer

def get_analyzed_data(url: str) -> dict:
    analyzer = initialize_analyzer(url=url)
    avg_price_by_city = modify_data_for_chart_payload(
        analyzer.get_avg_price_by_city()
    )
    avg_price_by_year = modify_data_for_chart_payload(
        analyzer.get_avg_price_by_year()
    )
    top_5_cities_with_ads = modify_data_for_chart_payload(
        analyzer.get_top_5_cities_with_ads()
    )
    return {
        "avg_price_by_city": {
            "labels": avg_price_by_city[0],
            "data": avg_price_by_city[1]
        },
        "avg_price_by_year": {
            "labels": avg_price_by_year[0],
            "data": avg_price_by_year[1]
        },
        "top_5_cities_with_ads": {
            "labels": top_5_cities_with_ads[0],
            "data": top_5_cities_with_ads[1]
        }
    }

def modify_data_for_chart_payload(original_data: dict) -> tuple:
    labels = list(original_data.keys())
    data = list(original_data.values())
    return labels, data