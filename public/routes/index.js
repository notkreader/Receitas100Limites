var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const connectionOptions = ({
    host: "localhost",
    user: "root",
    password: "password_123",
    database: "cookingdb",
    multipleStatements: true
});

/*router.get(['/', "/home"], function(req, res) {
    res.render("home.ejs");
});*/

/* Obtém a página inicial. */
router.get('/', function(req, res) {
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query("select name_recipe_type, name_recipe, time_recipe from recipe inner join recipe_type on id_recipe_type = fk_recipe_type;",
        function(err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.json({ "message": "success", recipes: rows });
            }
        });
});

/*router.get('/home', function(req, res) {
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query("select name_recipe_type, name_recipe, time_recipe from recipe inner join recipe_type on id_recipe_type = fk_recipe_type;",
        function(err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.json({ "message": "success", "recipeType": rows[0], "recipeName": rows[1], "recipeTime": rows[2] });
            }
        });
    connection.end();
});*/

router.get(['/', "/home"], function(req, res) {
    res.render("home");
});

router.get('/forum', function(req, res) {
    res.render("forum");
});

router.get('/jogo', function(req, res) {
    res.render("jogo");
});

router.get('/login', function(req, res) {
    res.render("login");
});

router.get('/signup', function(req, res) {
    res.render("signup");
});


module.exports = router;