# API-WareHouse
The API Store for All Application &amp; Backend Frameworks of ongoing &amp; past projects.

## Basic Setup
NoSql is being used as the primary database framework. The database will be hosted on DynamoDB.

## Features Required
### 1. An API for Fetching Latest News/Updates
This API will fetch news content from various websites like [Times of India](https://timesofindia.indiatimes.com/), [Gadget News NDTV](https://gadgets.ndtv.com/news), [Hindustan Times](https://www.hindustantimes.com), etc.  
These web scraped contents will be stored in the database along with important fields like **Web URL**, **Date**, **Category** (like Tech, Education, etc.).  
The main aim of web scraping is to cache relevant content and display it to our users on the basis of their interests.  

### 2. Web Scraping API for Event Fetching
This will be similar to API 1 but in this case it will pull event details from various sites like [BookMyShow](#), [PayTM Insider](#) and other similar ticket or event booking platforms.  
It will orderly arrange them to the database every day on the basis of relevance and keeping important information like **Price**, **Event Name**, **Ticket URL**, **Location**, **Event Type** and other relevant details.  

### 3. API to Show & Compare Events
This will take the Event Name/Location/Category/Date and check the events database and sort the events on basis of user query.  
If no input is provided then, will sort the event on basis of Location, Date and Rating Combined.  
This will have another feature that, if there is instance of an event data fetched from two or more sites (say the event being hosted in multiple sites), then It will compare and show the Link Providing the lowest price. And will also send the additional Links of other sites hosting the event. But the main content will be from the one hosting it at the cheapest.

## Contribution 
Anyone can contribute to this project and we will be providing links to their Github Profiles in our final application as tribute to the contribution.
To contribute, fork this repository, Add your files under a subfolder named after **your username**. And add your APIs over there.  
After you are done, add your name to the [Contribution File](CONTRIBUTION.md). You will find more instructions over there.  
After you are done with the above commits, create a Pull Request and wait for the confirmation.

##### Its Hacktober Fest Time, so abide by their guidelines to get free goodies for yourself. Do star this repo, if the contribution counts towards Hacktober Fest. 

#### Spread OpenSource Love! Thanks

