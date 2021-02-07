var http = require("http");
var path = require("path");
var express = require('express');
var app = express();

var mysql = require('mysql');

var connectionMysql = {
    host: "localhost",
    user: "root",
    password: "password_123",
    database: "cookingdb"
}

app.set("views", path.join(__dirname, "public/views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.render('home');
});




/*
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("html", { "index": "home.html" })); */

app.listen(8888, function() {
    console.log("Server running at http://localhost:8888");
});