/*let posts = function() {
    const recipes = document.querySelectorAll("#recipe");
    console.dir(recipes);
}

window.onload = posts;
*/
function AllRecipes() {
    this.recipesList = [];
    this.size = 0;
}

AllRecipes.showRecipes = function(recipesList) {
    recipesList = recipesList || AllRecipes.defaultValues;
    if (recipesList.size > 0)
        document.getElementById('recipes').innerHTML = recipesList.listRecipe();
}

AllRecipes.prototype.listRecipe = function() {
    let str = '';
    this.recipesList.forEach(recipe => {
        if (str === '')
            str = '<div id="recipe">';
        else
            str += '<div id="recipe">';
        str += '<div id="recipe_image_div"> <img id="recipe_image" src="images/esparguete_camarao.png"> </div>';
        str += '<label id="title">' + recipe.name + '</label><br><br>';
        str += '<label id="main_word">Tempo de Confeção: </label><label id="desc">' + recipe.confectionTime + '</label><br><br>';
        str += '<label id="main_word">Ingredientes:</label><br><label id="desc">';
        recipe.ingredients.forEach(elem => {
            str += elem + '<br>';
        })
        str += '</label><br><label id="main_word">Preparação:</label><br><label id="desc">';
        recipe.preparation.forEach(elem => {
            str += elem + '<br>';
        })
        str += '</label></div>';
    })
    return str;
}

AllRecipes.addRecipe = function(recipesList) {
    let recipeType = document.getElementById('recipe_type').value;
    let recipeName = document.getElementById('recipe_name').value;
    let recipeConfectionTime = document.getElementById('recipe_time').value;
    let recipeIngredients = document.getElementById('recipe_ingredients').value;
    let recipePreparation = document.getElementById('recipe_preparation').value;
    //let recipeImage = document.getElementById('').value;
    recipesList.addRecipe(new Recipe(recipeType, recipeName, recipeConfectionTime, recipeIngredients, recipePreparation, 'abc'));
    recipesList.size += 1;
    AllRecipes.showRecipes(recipesList);
}

AllRecipes.prototype.addRecipe = function(recipe) {
    this.recipesList.push(recipe);
}

AllRecipes.defaultValues = (new AllRecipes());

let recipesList = AllRecipes.defaultValues;


function Recipe(type, name, confectionTime, ingredients, preparation, image) {
    this.type = type;
    this.name = name;
    this.confectionTime = confectionTime;
    this.ingredients = ingredients.replace(/\r\n/g, "\n").split("\n");
    this.preparation = preparation.replace(/\r\n/g, "\n").split("\n");
    this.image = image;
}