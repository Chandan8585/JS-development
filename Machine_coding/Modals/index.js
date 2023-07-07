
// closeBtn.addEventListener("click", ()=> {
//         //      if(event.target.classList.contains(closeBtn)){
//          para.classList.toggle("modalClose");
//         //  closeBtn.innerHTML = "show Button"
//         //    }
//         // else if(event.target.classList.contains(showBtn)){
//         //     para.classList.remove("modalClose");
//         // }
   
// })
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");
const para = document.querySelector(".para");
const body = document.querySelector("body");
const lightController = document.querySelector(".light");

// lightController.addEventListener("click", (e)=> {
//     if(e.target.classList.contains("day")){
//           body.classList.add("dayLight");
//     }
//    else if(e.target.classList.contains("night")){
//         body.classList.add("nightLight");
//   }
// })


lightController.addEventListener("click", (e) => {
  if (lightController.classList.contains("day")) {
    body.classList.add("dayLight");
  } else if (lightController.classList.contains("night")) {
    body.classList.add("nightLight");
  }
});

closeBtn.addEventListener("click", () => {
  para.classList.add("modalClose");
  const showBtn = document.createElement("button");

});

showBtn.addEventListener("click", () => {
    para.classList.remove("modalClose");
  });

