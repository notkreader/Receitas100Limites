/*const mysql = require('mysql');

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "password_123",
    database: "cookingdb",
    multipleStatements: true
};

function getRecipesList(req, res) {
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query("select name_recipe_type, name_recipe, time_recipe from recipe inner join recipe_type on id_recipe_type = fk_recipe_type;",
        function(err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.json({ "message": "success", "recipeType": rows[0], "recipeName": rows[1], "recipeTime": rows[2] });
            }
            console.log(rows);
        });
    connection.end();
}

module.exports.getRecipesList = getRecipesList;*/