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
        str += '<div id="recipe_image_div"> <img id="recipe_image" src="' + recipe.image + '"> </div>';
        //str += '<div id="recipe_image_div"> <img id="recipe_image" src="images/esparguete_camarao.png"> </div>';
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
    //let recipeImage = document.getElementById('add_image').value;

    recipesList.addRecipe(new Recipe(recipeType, recipeName, recipeConfectionTime, recipeIngredients, recipePreparation, 'image'));
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



// Código para dar print nos compos do login
printLogin = function() {
    let mail = document.getElementById("mail_txt");
    let pass = document.getElementById("pass_txt");

    console.log(`Email: ${mail.value} | Password: ${pass.value}`);
}

// Código para o menu andar para baixo
window.onscroll = function() {
    var navbar = document.getElementById("menu");

    if (window.pageYOffset >= 200) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

// Código para a avaliação de 1 a 5 em estrelas
document.addEventListener('DOMContentLoaded', function() {
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.addEventListener('click', function(ev) {
            let span = ev.currentTarget;
            let stars = document.querySelectorAll('.star');
            let match = false;
            let num = 0;
            stars.forEach(function(star, index) {
                if (match) {
                    star.classList.remove('rated');
                } else {
                    star.classList.add('rated');
                }
                //are we currently looking at the span that was clicked
                if (star === span) {
                    match = true;
                    num = index + 1;
                }
            });
            document.querySelector('.stars').setAttribute('data-rating', num);
        });
    });

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

// Código que dá print no rating recebido pelo cliente
printStartClassification = function(number) {
    console.log(`${ number }`);
}

// Código de Drag and Drop
function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
        .dataTransfer
        .clearData();
}