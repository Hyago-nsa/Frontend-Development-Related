const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){

    apiKey = "1d024efacc1aabb02616eb64ae5f9b2f";
    city = req.body.cityName;
    unit = "metric";
    const url= "https://api.openweathermap.org/data/2.5/weather?q="+ city  +"&appid="+  apiKey +"&units=" + unit;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
            const location = weatherData.name;

            console.log(temp);
            console.log(description)
            console.log(location);

            res.write("<h1>The temperature in " + location + " is " + temp + " degree Celcius.</h1>");
            res.write("<p><h3>The weather is actually: " + description + "</h3></p>");
            res.write("<img src=" + iconURL + ">");
            res.send();
        });
    });
})



app.listen(port, function(){
    console.log("We're running on port: " + port);
})

