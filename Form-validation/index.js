let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");

formData.addEventListener("keyup", (event)=> {
    event.preventDefault();
    console.log(event.target);
})