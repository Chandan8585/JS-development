let parentElement = document.getElementById("card-container");
let cardContainer = document.createElement("div");
cardContainer.classList.add("card");
let cardImg = document.createElement("img");
cardImg.classList.add("card-img");
cardImg.setAttribute("src", "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg");
cardImg.setAttribute("width", "400");
cardImg.setAttribute("alt", "earth Img");
cardContainer.appendChild(cardImg);


let cardDescription = document.createElement("p");
cardDescription.innerText = "Hii kaise ho tum ye mera card hai";
cardContainer.appendChild(cardDescription);

parentElement.appendChild(cardContainer);

let AddtoCart = document.createElement("button");
AddtoCart.innerText= "Add To Cart"
cardContainer.appendChild(AddtoCart);

function AddCart(){
    
    let plus = document.createElement("button");
    plus.innerText = "+";
    let minus = document.createElement("minus");
    minus.innerText = "-";
}

AddtoCart.addEventListener("click", ()=> {
      
})