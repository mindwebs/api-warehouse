from py_get import simple_get
from bs4 import BeautifulSoup
import json
import atexit

print("Scraping tech articles...")

raw_html = simple_get('https://techurls.com/')
html = BeautifulSoup(raw_html, 'html.parser')

links = html.find_all('div', class_="publisher-block")
hrefs = html.find_all('a', href=True)
    
article = {
    "title": "",
    "link": "",
    "publisher": ""
}
articles = []

for data in links:
    article["publisher"] = data["data-publisher"]

for data in hrefs:
    article["link"] = data["href"]
    article["title"] = data.text
    articles.append(dict(article))

with open('techlinks.txt', 'w') as outputfile:
    json.dump(articles, outputfile)


def exiting():
    print("Finished scraping tech articles")

atexit.register(exiting)
