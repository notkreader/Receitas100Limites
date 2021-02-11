var path = require("path");
//var reqHandlers = require("./reqHandlers");
var bodyParser = require("body-parser");
var express = require('express');
var app = express();

var routes = require("./public/routes/index");

app.set("views", path.join(__dirname, "public/views"));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/', routes);


app.listen(8888, function() {
    console.log("Server running at http://localhost:8888/");
});