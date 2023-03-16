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
    return {
        "avg_price_by_city": analyzer.get_avg_price_by_city(),
        "avg_price_by_year": analyzer.get_avg_price_by_year(),
        "top_5_cities_with_ads": analyzer.get_top_5_cities_with_ads()
    }