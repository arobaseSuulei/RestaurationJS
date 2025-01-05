async function getMenu() {


    const test = true
    let nameMenu = document.getElementById("nameMenu")
    let name = nameMenu.value
    console.log(name)

    const request = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    try{
        // recup données
        const response = await fetch(request)

        // conversion du retour en json

        const menus=await response.json()

        
        console.log(menus.meals[0].strMeal)

        if(menus.meals[0] ){
            const elt = document.createElement("p")
            
            const text=document.createTextNode(menus.meals[0].strMeal + " " + "ajouté avec succès ")


            elt.appendChild(text)
            document.getElementById("divAjout").appendChild(elt)


        }

        
        

        

        

    }
    catch{
        console.log("error")
    }

    


    




}










