const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();
const port = 3000;

const items = ["Buy food","Take a shower","Read a book"];
const workItems = ["Program","Study","Practice"]
const title = ["To-do on ", " Work List"];

const currentDate = date.getDate();
const currentDay = date.getDay();

const workTitle = currentDay + title[1]

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){

    res.render("list", {listTitle: currentDate, newListItems: items});
});

app.post("/", function(req,res){
    
    const item = req.body.item;

    if (req.body.submit === workTitle){
        workItems.push(item);
        res.redirect("/work");
    }   
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: workTitle, newListItems: workItems});
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(port,function(){
    console.log("We're working on port: " + port);
});