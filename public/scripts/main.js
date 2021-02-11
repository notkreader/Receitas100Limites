window.onload = function(event) {
    let info = new Information();
    info.getReceitas();

    /*info.getEntrada();
    info.getBebida();
    info.getCarne();
    info.getPeixe();
    info.getMarisco();
    info.getVegetariano();
    info.getSobremesa();*/

    window.info = info;

    if (window.location.pathname === "/" | window.location.pathname === "/home")
        info.showHome();
};

function replacePageChildNodes(node) {
    let page = document.getElementById("body_container");
    while (page.hasChildNodes()) {
        page.removeChild(page.lastChild);
    }
    page.appendChild(node);
}

//Incluindo minimo e máximo
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function filterRecipesBy(array, value) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        if (temp.type === value) {
            filtered.push(temp);
        }
    }
    return filtered;
}

/*window.onloadend = function() {
    var menu = document.getElementById("menu");
    var items = menu.getElementsByClassName("menuItem");
    items.forEach(elem => {
        elem.addEventListener('click', function() {
            const current = menu.getElementsByClassName("active");
            current.className = current.className.replace("active", "");
            e.target.className += "active";
        });
    })
}*/