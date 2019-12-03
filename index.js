const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req);
    request("http://dmxlogistic.com/api_dmx/v1/cities", function(error, response, body) {
        var data = JSON.parse(body);
        var cities = data.cities;
        console.log(data);
    });
});

app.listen(3000, function() {
    console.log("Server run on port 3000");
});