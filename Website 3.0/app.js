const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require (__dirname + "/date");

const app = express();
const port = 3000;

const indexContent = "Index content";
const aboutContent = "About content";
const contactContent = "Contact content";

const currentDate = date.getDate();
const currentYear = date.getYear();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index", {currentDate: currentDate, textIndex: indexContent});
});

app.get("/about",function(req,res){
    res.render("about", {currentDate: currentDate, textAbout: aboutContent});
})

app.get("/contact",function(req,res){
    res.render("contact", {currentDate: currentDate, textContact: contactContent});
})

app.listen(port,function(){
    console.log("We're online on port: " + port);
})