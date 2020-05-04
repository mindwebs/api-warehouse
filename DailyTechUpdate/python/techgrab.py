from py_get import simple_get
from bs4 import BeautifulSoup
from selenium import webdriver
import json

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

for index, data in enumerate(links):
    article["publisher"] = data["data-publisher"]

for index, data in enumerate(hrefs):
    article["link"] = data["href"]
    article["title"] = data.text
    articles.append(dict(article))

with open('techlinks.txt', 'w') as outputfile:
    json.dump(articles, outputfile)