var express = require("express");
var app = express();
var request = require("request");

app.get("/", function(req, res){
    res.render("search.ejs"); 
});

app.get("/results", function(req, res){
    var query = req.query.sourceName;
    var url = "https://newsapi.org/v2/top-headlines?sources=" + query + "&apiKey=20ede1501eb346e59947494721570bfc";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            res.render("news.ejs", {parsedData: parsedData});
        }
    });
});

// listen the request
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initiated"); 
});