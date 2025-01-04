// 

const response = async()=>{

    let request = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`

    // fetching data
    let data = await fetch(request)

    // convertir la reponse en json
    let menus = await data.json()

    //
    console.log(menus.meals[0])
}

response()


