const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/src/signup.html");

});

app.post("/", function (req, res){
    res.sendFile(__dirname+"/src/success.html");

});

app.listen(3000, function(){
    console.log("Server is running on port 3000 ")
})