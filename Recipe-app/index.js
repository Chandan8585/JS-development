const recipeUrl = "https://recipeapi.prakashsakari.repl.co/api/recipes";

const getRecipe = async (recipeUrl)=> {
try {
    const res = await axios.get(recipeUrl);
    return res.data;
    
} catch (error) {
    error = new Error("Something Went Wrong");
    return error
}
}

const recipes = await getRecipe(recipeUrl);
console.log(recipes)


const productContainer = document.getElementById("products");

for(let recipe of recipes){
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardContainer.innerHTML = `<div class="card card-vertical d-flex direction-column relative shadow">
    <div class="card-image-container">
         <img class="card-image" src=${recipe["image-url"]} alt="shoes">
    </div>
    <div class="card-details">
         <div class="card-title">${recipe["TranslatedRecipeName"]}</div>
         <div class="card-description"> 
              <p class="card-price">
                 Cuisine-type:- ${recipe["Cuisine"]}
              </p>
         </div>
         <div class="time-ingredient-count">
        
         <p>Ingredients used: ${recipe["Ingredient-count"]} items</p>
         <p>time taken: ${recipe["TotalTimeInMins"]} mins</p>
         </div>
    </div>
</div>`;
    productContainer.appendChild(cardContainer);
}
