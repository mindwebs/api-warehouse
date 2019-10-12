"use strict"
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');



//fetching events from bookmyshow
let fetchEventsBookmyShow = ()=>{
    let url = `https://in.bookmyshow.com/kolkata/events`;
    //making http requesto to bookmyshow server for events of kolkata
    request(url,(err,res,html)=>{
        if(err){
            console.log(`Error occured : ${err}`);
        }
        else{
            //parse the html using cheerio
            let $ = cheerio.load(html);
            let result = [];
            //traverse to scrap all the details
            $('.card-details').map(function(){
                let dd = $(this);
                result.push({
                    event_date : `${dd.children().first().children('.__evt-date-col').children('.__evt-date').text()} ${dd.children().first().children('.__evt-date-col').children('.__evt-month').text()}`,
                    event_name : dd.children().last().children().first().children().text(),
                    event_location : $(dd.children().last().children('.card-tag')[0]).children().text(),
                    event_type :  $(dd.children().last().children('.card-tag')[1]).children().text(),
                    event_fees :  $(dd.children().last().children('.card-tag')[2]).children().text()
                })
            });
            //writing into file
            fs.writeFile("./output.json",JSON.stringify(result), function(err) {
                if(err) {
                    console.log(`Error occured : ${err}`);
                }
                console.log("Data saved in output.json file");
            }); 
        }
    });
}

 
module.exports = {fetchEventsBookmyShow}