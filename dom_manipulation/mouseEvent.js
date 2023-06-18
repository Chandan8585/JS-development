let input = document.getElementById("input");

// document.body.addEventListener("mousedown", (e)=>{
//    let xcor = e.clientX;
//    let ycor = e.clientY;

//    console.log(`xCor is ${xcor} and ycor is ${ycor}`);
// })


input.addEventListener("mousedown", (e)=>{
   let xcor = e.pageX;
   let ycor = e.pageY;

   console.log(`xCor is ${xcor} and ycor is ${ycor}`);
})