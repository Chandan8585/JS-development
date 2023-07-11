// const cardId = localStorage.getItem("id");

const recipeContainer = document.getElementById("recipe-container");
const cardRecipe = localStorage.getItem("myId");

const SINGLERECIPEURL =
 `https://recipeapi.prakashsakari.repl.co/api/recipes/${cardRecipe}`;

const getData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const singleRecipe = await getData(SINGLERECIPEURL);

console.log(singleRecipe);

recipeContainer.innerHTML = `hiiiiiii ${singleRecipe["ID"]}` ;




const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardContainer.innerHTML = `<div  class="card card-vertical d-flex direction-column relative shadow" >
    <div class="card-image-container">
         <img class="card-image" src=${singleRecipe["image-url"]} alt="shoes">
                  <div class="cta-btn" data-id='${singleRecipe["ID"]}'>
               <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
        
                 Know More
               </button>
          </div>
    </div>
    <div class="card-details">
         <div class="card-title">${singleRecipe["TranslatedRecipeName"]}</div>
         <div class="card-description"> 
              <p class="card-price">
                 Cuisine-type:- ${singleRecipe["Cuisine"]}
              </p>
         </div>
         <div class="time-ingredient-count">
        
         <p>${singleRecipe["Ingredient-count"]} ingredients</p>
         <p>${singleRecipe["TotalTimeInMins"]} mins</p>
         </div>
         
    </div>
</div>`;
recipeContainer.appendChild(cardContainer);
