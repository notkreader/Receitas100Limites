/*let posts = function() {
    const recipes = document.querySelectorAll("#recipe");
    console.dir(recipes);
}

window.onload = posts;
*/

function AllRecipes() {
    this.allRecipes = [];
}

function Recipe(name, confectionTime, ingredients, preparation, image) {
    this.name = name;
    this.confectionTime = confectionTime;
    this.ingredients = ingredients;
    this.preparation = preparation;
    this.image = (image && validateImage(image)) ? race : 'No Image';
}

function validateImage(file) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    return file && acceptedImageTypes.includes(file['type'])
}