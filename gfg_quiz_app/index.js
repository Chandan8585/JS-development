let questionContainer = document.querySelector(".question-container");
let optionContainer = document.querySelector(".option-container");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let parentContainer = document.querySelector(".parent-container");
let scoreContainer = document.querySelector(".score");
const url = "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple";


//First we will create an empty array and index for the specific question 


let quizes = [];
let currentQuestionIndex = 0;
let score = 0;
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data?.results;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

const getQuizzes = async () => {
  try {
    quizes = await getData(url);
   
  } catch (error) {
    console.log(error);
  }
};

function createQuestionAndOptions(quizes, index) {
  const questionEle = document.createElement("div");
  questionEle.innerText = quizes[index]?.question;
  questionContainer.appendChild(questionEle);
  
  let options = [quizes[index].correct_answer, ...quizes[index].incorrect_answers ];
  console.log(options);
  for(let option of options){
    const optionBtn = document.createElement("button");
    optionBtn.classList.add("optionButton");
    optionBtn.setAttribute("name", option);
  optionBtn.innerText = option;
  optionContainer.appendChild(optionBtn);

  }
  scoreContainer.innerHTML = `${score}`
}

function disableOption(){
document.querySelectorAll(".optionButton").forEach((button) => 
     (button.disabled = true)   
);

}
optionContainer.addEventListener("click", (event)=> {
      if(event.target.name === quizes[currentQuestionIndex].correct_answer){
        // console.log("correct");
        event.target.classList.add("green");
        score++
        disableOption();
    
      }
      else if(event.target.name !== quizes[currentQuestionIndex].correct_answer){
        event.target.classList.add("red");
        disableOption();
      }

})

nextBtn.addEventListener("click", () => {
    currentQuestionIndex >= quizes.length - 1
      ? (parentContainer.innerHTML = "Quiz Completed")
      : (() => {
          currentQuestionIndex++;
          questionContainer.innerText = "";
          optionContainer.innerText = "";
          createQuestionAndOptions(quizes, currentQuestionIndex);
        })();
  });
  
  prevBtn.addEventListener("click", () => {
    currentQuestionIndex < 1
      ? (parentContainer.innerHTML = "Click on Next Button for Question")
      : (() => {
          currentQuestionIndex--;
          questionContainer.innerText = "";
          optionContainer.innerText = "";
          createQuestionAndOptions(quizes, currentQuestionIndex);
        })();
  });
  
setTimeout(getQuizzes, 1000);

