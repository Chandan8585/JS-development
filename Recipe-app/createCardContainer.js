export const createCardContainer = (parentElement, recipes)=> {
    for(let recipe of recipes){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        cardContainer.setAttribute("id","data-all")
    
        cardContainer.innerHTML = `<div  class="card card-vertical d-flex direction-column relative shadow" data-id=${recipe["ID"]}>
        <div class="card-image-container">
             <img class="card-image" src=${recipe["image-url"]} alt="shoes">
                      <div class="cta-btn" data-id='${recipe["ID"]}'>
                   <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"  data-id=${recipe["ID"]}>
            
                     Know More
                   </button>
              </div>
        </div>
        <div class="card-details">
             <div class="card-title">${recipe["TranslatedRecipeName"]}</div>
             <div class="card-description"> 
                  <p class="card-price">
                     Cuisine-type:- ${recipe["Cuisine"]}
                  </p>
             </div>
             <div class="time-ingredient-count">
            
             <p>${recipe["Ingredient-count"]} ingredients</p>
             <p>${recipe["TotalTimeInMins"]} mins</p>
             </div>
             
        </div>
    </div>`;
        parentElement.appendChild(cardContainer);
    }
}