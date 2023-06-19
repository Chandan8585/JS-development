const kuler = require('kuler');
const database = {
  data: [
    {
      question: "What is JavaScript?",
      options: {
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned"
      },
      CorrectAnswer: "a"
    },
    {
      question: "Which of the following is correct about JavaScript?",
      options: {
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language"
      },
      CorrectAnswer: "a"
    }
  ]
};
const leaderBoard = {
  data: [
    {
      name: "Aishwarya",
      score: 2
    },
    {
      name: "Ishika",
      score: 1
    },
    {
      name: "Anamika",
      score: 2
    }
  ]
}
const readlineSync = require("readline-sync");
const userName = readlineSync.question("Enter Your Name");
console.log(kuler(`Hii ${userName} welcome to Quizify's Javascript MCQs`, "#fbbf24"));
let score = 0;
function showLeaderBoard(leaderBoard){
  leaderBoard.data.push({name:userName, score: score});
     let sortedLeaderBoard = leaderBoard.data.sort((a,b)=> b.score- a.score);
   for(let i in sortedLeaderBoard){
     console.log(kuler(`${sortedLeaderBoard[i].name} score = ${sortedLeaderBoard[i].score}`, "#fbbf24" ));
   }
}
function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Answer is correct.");
    score++;
  } else {
    console.log("That's a wrong answer.");
  }
}

function showQuestion() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(kuler(`Q${i + 1}- ${database.data[i].question}`, 
  "#ea580c"));
    for (let key in database.data[i].options) {
      console.log(kuler(`${key}: ${database.data[i].options[key]} `,  "#65a30d"));
    }
    const userAnswer = readlineSync.question("Enter the correct option: ");
    const correctAnswer = database.data[i].CorrectAnswer;
    checkAnswer(userAnswer, correctAnswer);
  }
}


showQuestion();
console.log(kuler(`Your final score is ${score}`, "#0891b2"))
showLeaderBoard(leaderBoard);