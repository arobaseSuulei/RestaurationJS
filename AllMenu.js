


// Récupérer les menus depuis le localStorage ou initialiser un tableau vide
let menusArray = JSON.parse(localStorage.getItem("menus")) || [];

// Fonction pour afficher les menus à partir de l'array
function displayMenus() {
    const divAjout = document.getElementById("divAjout");
    divAjout.innerHTML = "";  // Vider le div avant de le remplir à nouveau

    // Ajouter chaque menu du tableau dans le div
    menusArray.forEach(menu => {
        const elt = document.createElement("p");
        const text = document.createTextNode("nom :" + menu.strMeal );
        elt.appendChild(text);
        divAjout.appendChild(elt);
    });
}

// Fonction pour ajouter un menu
async function getMenu() {
    let nameMenu = document.getElementById("nameMenu");
    let name = nameMenu.value;
    console.log(name);

    const request = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        if (data.meals && data.meals[0]) {
            const menu = {
                strMeal: data.meals[0].strMeal,  // Nom du menu
                
                // Ajouter d'autres propriétés si nécessaire, comme l'ID, l'image, etc.
            };

            // Ajouter le menu au tableau
            menusArray.push(menu);

            // Mettre à jour le localStorage avec le nouveau tableau
            localStorage.setItem("menus", JSON.stringify(menusArray));

            // Afficher les menus après ajout
            displayMenus();
        } else {
            console.log("Aucun menu trouvé.");
        }
    } catch (error) {
        console.log("Erreur lors de la récupération des données", error);
    }
}

// Lier la fonction getMenu au bouton
document.getElementById("addMenuButton").addEventListener("click", getMenu);

// Afficher les menus au chargement de la page
window.onload = displayMenus;

 

