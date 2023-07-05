let btnContainer = document.querySelector(".buttonContainer");
let timer = document.querySelector(".timer");
let secondsContainer = document.querySelector(".seconds");
let minutesContainer = document.querySelector(".minute");
let startPauseButton = document.querySelector(".start-pause-btn");
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId;
btnContainer.addEventListener("click", (e)=> {
//   const button =  ;
  
     if(e.target.classList.contains ("start-btn")){
      
        timerId = setInterval(()=>{
         seconds++;
         if(seconds>58){
            seconds=0;
            minutes++;
            if(minutes > 59 && seconds > 58){
                  
                  minutes =0;
                  hours++;
            }
        }  
          secondsContainer.innerHTML = `${seconds < 9 ? `0${seconds}` : `${seconds}`} `;
          minutesContainer.innerHTML = `${minutes < 9 ? `0${minutes}` : `${minutes}`} `;
        }, 1000)
      }
    if(e.target.classList.contains("stop-btn")){
      clearInterval(timerId);
      
  }
  if(e.target.classList.contains("reset-btn")){
   clearInterval(timerId);
   hours = minutes = seconds = 0;
   timer.innerHTML = `${hours < 9 ? `0${hours}` : `${hours}`}: ${minutes < 9 ? `0${minutes}` : `${minutes}`} : ${seconds < 9 ? `0${seconds}` : `${seconds}`} `;
}
});

