let start = document.getElementById("start-button");
let count = document.getElementById("count");
let point = 0;
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
