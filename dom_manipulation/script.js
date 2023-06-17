let start = document.getElementById("start-button");
let count = document.getElementById("count");
let stopButton = document.getElementById("stop");
let point = 0;
stopButton.addEventListener("click", ()=> {
         stopButton.classList.toggle("btn-red");  
})
count.addEventListener("click", ()=>{
    point++;
   
   count.innerText = `Count is ${point}`;
    // if(start.innerText==="start"){
    //     start.innerText = "Begin";
    // }
    // else{
    //     start.innerText = "start";
    // }
})
