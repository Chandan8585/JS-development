const input = document.querySelector(".input");

function inputHandler(e){
console.log(e.target.value);
}
function debounce(callback, delay){
    let timerId;
   return function(...args){
    clearInterval(timerId);
    timerId = setTimeout(()=>{
        callback(...args)
    }, delay);
   }
}

const debounceHandler = debounce(inputHandler, 500);
input.addEventListener("keyup", debounceHandler);