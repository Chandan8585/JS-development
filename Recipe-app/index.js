import { createCardContainer } from "./createCardContainer.js";
import { createCuisne } from "./createCuisine.js";
const recipeUrl = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const cuisineUrl =  "https://recipeapi.prakashsakari.repl.co/api/recipes/cuisines";
const productContainer = document.getElementById("products");
const filterContainer = document.querySelector(".filter");
let search = document.getElementById("search-input");

let checkedCuisineArray = [];
let searchText = "";
let filteredArrayOfRecipes = [];
const getRecipe = async (recipeUrl)=> {
try {
  const res = await axios.get(recipeUrl);
  return res.data;
  
} catch (error) {
  error = new Error("Something Went Wrong");
  return error;
}
}
const recipes = await getRecipe(recipeUrl);
console.log(recipes);

const getCuisine = async (cuisineUrl)=> {
   try {
      const result = await axios.get(cuisineUrl);
      return result.data;
   } catch (error) {
      error = new Error("Something Went Wrong");
      return error;
   }
}
const cuisines = await getCuisine(cuisineUrl);
console.log(cuisines);

productContainer.addEventListener("click", (event)=>{
  console.log(event.target.dataset.id);
  const cardId = event.target.dataset.id;
  if(cardId){
      localStorage.clear();
        localStorage.setItem("myId","data-all" );
        location.href = "singleRecipe.html"
        console.log(cardId);
  }
})

function capitalizeFirstLetter(str){
  const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
  return words.join(" ");
}
const getFilteredData =()=>{
  filteredArrayOfRecipes= searchText?.length > 0 ? recipes.filter((recipe)=> 
  recipe.TranslatedRecipeName.includes(searchText)) : recipes;


  if(checkedCuisineArray?.length > 0){
     filteredArrayOfRecipes = searchText?.length < 1 ? recipes : filteredArrayOfRecipes ;
     filteredArrayOfRecipes = filteredArrayOfRecipes.filter(recipe => checkedCuisineArray.includes(recipe.Cuisine));
  }

  return filteredArrayOfRecipes;
}
search.addEventListener("input", (e) => {
  searchText = capitalizeFirstLetter(e.target.value);
  let searchedArray = getFilteredData();


productContainer.innerHTML = "";
createCardContainer(productContainer, searchedArray);
})


const handleCuisineClick = (event)=> {
const  id = event.target.dataset.id;
const isSelected = event.target.checked;
const checkedCuisine = cuisines.reduce((acc, curr)=>  (curr["ID"] === acc ? curr.Cuisine : acc), id)
checkedCuisineArray = isSelected ? [...checkedCuisineArray, checkedCuisine] : checkedCuisineArray.filter((cuisine) => cuisine !== checkedCuisine);
console.log(checkedCuisineArray);
const filteredArrOfCuisine = getFilteredData();
  productContainer.innerHTML = "";
createCardContainer(productContainer, filteredArrOfCuisine);
}
filterContainer.addEventListener("click", handleCuisineClick);


createCardContainer(productContainer, recipes)
createCuisne(filterContainer, cuisines);


