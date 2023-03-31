"use strict";

//Declaring the questions
const questionA = new Map([
  ["question", "A. Who Founded Ethereum?"],
  [
    "answer",
    [
      "1. Satoshi Nakamoto",
      " 2. Vitalik Cronje",
      " 3. Do Kwon",
      " 4. Vitalik Buterin",
    ],
  ],
  [1, "Satoshi Nakamoto"],
  [2, "Vitalik Cronje"],
  [3, "Do Kwon"],
  [4, "Vitalik Buterin"],
  ["correctAnswer", 4],
  [true, "🥳 Correct, well done✅"],
  [false, "😥 Incorrect, keep trying"],
]);

/*
// const questionB = {
//   question: "2. What is the smallest unit of ETH?",
//   answer: ["a. Ethereum", " b. BTC", " c. Gwei", " d. Wei"],
// };

// const questionC = {
//   question: "3. What is the maximum supply of Ether?",
//   answer: [
//     "a. 21 million",
//     " b. Unlimited",
//     " c. 1 billion",
//     " d. 100 billion",
//   ],
// };

// const questionD = {
//   question: "4. The most popular programming language for web3 is?",
//   answer: ["a. JavaScript", " b. Python", " c. Solidity", " d. Rust"],
// };

// const questionE = {
//   question: "5. The native token for the Arbitrum Cardano Ecosystem is?",
//   answer: ["a. ETH", " b. SOL", " c. ADA", " d. ARB"],
// };

// const web3Questions = [questionA, questionB, questionC, questionD, questionE];
**/

// LOADING THE QUIZ QUESTIONS
const containerQuestion = document.querySelector(".quiz-container");

// console.log(questionA);

containerQuestion.innerHTML = `${questionA.get("question")}
<br> <br>
${questionA.get("answer")}`;

console.log(questionA);

// ADD THE SUBMIT ANSWER FUNCTIONALITY
const answerInput = document.querySelector(".answer-input");
const inputAnswerBtn = document.querySelector(".submit-answer");
const displayMessage = document.querySelector(".message");
const userScore = document.querySelector(".score");
const userHighScore = document.querySelector(".highscore");
const backgroundColor = document.querySelector("body");
const restartButton = document.querySelector(".restart-quiz");

let score = 0;
let highscore = 0;

inputAnswerBtn.addEventListener("click", function() {
  const userAnswer = Number(answerInput.value);
  console.log(userAnswer);

  // Update the Display Message
  const checkUserAnswer = questionA.get("correctAnswer") === userAnswer;

  displayMessage.textContent = questionA.get(checkUserAnswer);

  // Add the score functionality
  score = userScore.textContent = checkUserAnswer ? 20 : 0;

  // Add the highscore functionality
  userHighScore.textContent = score;

  if (checkUserAnswer) {
    backgroundColor.style.backgroundColor = "#033d0d";
  }
});

// Add the Restart Functionality
restartButton.addEventListener("click", function() {
  backgroundColor.style.backgroundColor = "#38003a";
  answerInput.value = "";
  displayMessage.textContent = "...Answer Question A";
  userScore.textContent = 0;
  userHighScore.textContent = 0;
});
