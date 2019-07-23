var faker = require('faker');

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index.html");
});

//Server listener
//app.listen("8081", "127.0.0.1", function() {
//    console.log("Express Server is running...");
//});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express server...");
});

app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/registers", function(req, res) {
    res.render("registers.html");
});

app.get("/instructions", function(req, res) { 
    var eaxRandom = faker.random.number(200); 			

    var eaxResult = "movl" + " " + "$"+ eaxRandom + "," + " " + "%eax";

    res.render("instructions.ejs", {"eaxResult":eaxResult});
});

app.get("/history", function(req, res) {
    res.render("history.html");
});