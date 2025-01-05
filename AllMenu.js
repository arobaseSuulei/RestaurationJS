async function getMenu() {


    let nameMenu = document.getElementById("nameMenu")
    let name = nameMenu.value
    console.log(name)

    const request = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    try{
        // recup données
        const response = await fetch(request)

        // conversion du retour en json

        const menus=await response.json()

        console.log(menus.meals[0])
        console.log(menus.meals[0].strMeal)
    }
    catch{
        console.log("error")
    }



}









