export const createCuisne = (parentElement, cuisines) => {
  
    for (let cuisine of cuisines) {
        const container = document.createElement("div");
        container.classList.add("cuisineContainer");

      const label = document.createElement("label");
      label.classList.add("filter-label");
  
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("data-id", cuisine.ID);
      checkBox.classList.add("checkbox");
  
      const cardName = document.createElement("p");
      cardName.innerHTML = cuisine.Cuisine;
  
      label.appendChild(checkBox);
      label.appendChild(cardName);
  
      container.appendChild(label);
      parentElement.appendChild(container);
    }
  
    
  };
  
  
  
