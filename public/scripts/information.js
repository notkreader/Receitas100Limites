function Information() {
    recipesList = [];
    recipesList.push(createRecipe('Entrada', 'Pão de Alho', '25 minutos', '- alho\n- oregãos\n- queijo', '1. Misture tudo\n2. Leve ao forno', 'images/pao_alho.png'));
    recipesList.push(createRecipe('Bebida', 'Sumo de Laranja Natural', '10 minutos', '- 5 laranjas\n- açúcar', '1. Corte as laranjas\n2. Junte o açúcar\n3. Esprema as laranjs e junte o açúcar', 'images/sumo_laranja.png'));
    recipesList.push(createRecipe('Prato de Carne', 'Carne de Porco á Alentejana', '65 minutos', '- 3 bifes de vaca\n- sal', '1. Corte os bifes\n2. Junte o sal\n3. Leve ao lume durante 15 minutos', 'images/carne_porco_alentejana.png'));
    recipesList.push(createRecipe('Prato de Peixe', 'Choco Frito', '75 minutos', '- 3 chocos sem tinta\n- pão ralado para panar', '1. Corte os hocos em tiras\n2. Pane-os e leve-os ao forno', 'images/choco_frito.png'));
    recipesList.push(createRecipe('Prato de Marisco', 'Esparguete de Camarão', '50 minutos', '- esparguete\n- 5 camarões', '1. Corte os camarões enquanto o esparguete coze\n2. A meio da cozedura junte os camarões', 'images/esparguete_camarao.png'));
    recipesList.push(createRecipe('Prato Vegetariano', 'Omelete Vegetariana', '25 minutos', '- 5 ovos\n- oregãos', '1. Bata os ovos\n2. Leve ao lume e no fim junte os oregãos', 'images/omelete_veg.png'));
    recipesList.push(createRecipe('Sobremesa', 'Mousse de Manga', '30 minutos', '- 2 mangas', '1. Corte as mangas e triture-as\n2. Leve ao frio', 'images/mousse_manga.png'));

    entradaList = filterRecipesBy(recipesList, 'Entrada');
    bebidaList = filterRecipesBy(recipesList, 'Bebida');
    carneList = filterRecipesBy(recipesList, 'Prato de Carne');
    peixeList = filterRecipesBy(recipesList, 'Prato de Peixe');
    mariscoList = filterRecipesBy(recipesList, 'Prato de Marisco');
    vegetarianoList = filterRecipesBy(recipesList, 'Prato Vegetariano');
    sobremesaList = filterRecipesBy(recipesList, 'Sobremesa');
}

Information.prototype.showHome2 = function() {
    var br = document.createElement("br");

    document.getElementById("banner2").src = "images/sugestoes.png";
    let sugestionDiv = document.createElement("div");
    sugestionDiv.setAttribute("id", "sugestion_div");
    let titleLabel1 = document.createElement("label");
    titleLabel1.setAttribute("id", "title");
    titleLabel1.textContent = "Aqui estão 4 receitas escolhidas por nós que compõem um menu completo:";
    let titleLabel2 = document.createElement("label");
    titleLabel2.setAttribute("id", "title");
    titleLabel2.textContent = "entrada, bebida, prato principal e sobremesa.";

    sugestionDiv.appendChild(titleLabel1);
    sugestionDiv.appendChild(br);
    sugestionDiv.appendChild(titleLabel2);
    replacePageChildNodes(sugestionDiv);
};

Information.prototype.showHome = function() {
    var temp = recipesList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/sugestoes.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showEntrada = function() {
    var menuValue = document.getElementById("menu").value;
    console.log(menuValue);

    var temp = entradaList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/entradas.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showBebida = function() {
    var temp = bebidaList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/bebidas.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showCarne = function() {
    var temp = carneList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/pratos_carne.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showPeixe = function() {
    var temp = peixeList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/pratos_peixe.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showMarisco = function() {
    var temp = mariscoList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/pratos_marisco.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showVegetariano = function() {
    var temp = vegetarianoList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/pratos_veg.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};

Information.prototype.showSobremesa = function() {
    var temp = sobremesaList;
    var br = document.createElement("br");
    document.getElementById("banner2").src = "images/sobremesas.png";
    var recipeNodes = [];
    temp.forEach(elem => {
        let recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("id", "recipe");

        let recipeImageDiv = document.createElement("div");
        recipeImageDiv.setAttribute("id", "recipe_image_div");

        let recipeImageSrc = document.createElement("img");
        recipeImageSrc.setAttribute("id", "recipe_image");
        recipeImageSrc.setAttribute("src", elem.image);

        recipeImageDiv.appendChild(recipeImageSrc);
        recipeDiv.appendChild(recipeImageDiv);

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("id", "title");
        titleLabel.textContent = elem.name;
        recipeDiv.appendChild(titleLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let confectionTimeLabel = document.createElement("label");
        confectionTimeLabel.setAttribute("id", "main_word");
        confectionTimeLabel.textContent = "Tempo de Confeção: ";
        recipeDiv.appendChild(confectionTimeLabel);

        let timeLabel = document.createElement("label");
        timeLabel.setAttribute("id", "desc");
        timeLabel.textContent = elem.confectionTime;
        recipeDiv.appendChild(timeLabel);
        recipeDiv.appendChild(br.cloneNode());
        recipeDiv.appendChild(br.cloneNode());

        let allIngredientsLabel = document.createElement("label");
        allIngredientsLabel.setAttribute("id", "main_word");
        allIngredientsLabel.textContent = "Ingredientes:";
        recipeDiv.appendChild(allIngredientsLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.ingredients.forEach(ingredient => {
            let ingredientLabel = document.createElement("label");
            ingredientLabel.setAttribute("id", "desc");
            ingredientLabel.textContent = ingredient;
            recipeDiv.appendChild(ingredientLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeDiv.appendChild(br.cloneNode());

        let preparationLabel = document.createElement("label");
        preparationLabel.setAttribute("id", "main_word");
        preparationLabel.textContent = "Preparação:";
        recipeDiv.appendChild(preparationLabel);
        recipeDiv.appendChild(br.cloneNode());

        elem.preparation.forEach(step => {
            let stepLabel = document.createElement("label");
            stepLabel.setAttribute("id", "desc");
            stepLabel.textContent = step;
            recipeDiv.appendChild(stepLabel);
            recipeDiv.appendChild(br.cloneNode());
        });
        recipeNodes.push(recipeDiv);
    });
    let div = document.createElement("div");
    recipeNodes.forEach(node => {
        div.appendChild(node);
    });
    replacePageChildNodes(div);
};


Information.prototype.getReceitas = function() {
    let recipesList = this.recipesList;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "home", true);
    xhr.onreadystatechange = function() {
        if ((this.readyState === 4) && (this.status === 200)) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            response.home.forEach(current => recipesList.push(new Recipe(current.name_recipe_type, current.name_recipe, current.time_recipe, 'ingrediente', 'preparação', 'imagem')));
        }
    };
    xhr.send();
};