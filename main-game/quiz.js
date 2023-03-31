"use strict";

// SELECT THE HTML ELEMENTS
const answerInput = document.querySelector(".answer-input");
const inputAnswerBtn = document.querySelector(".submit-answer");
const displayMessage = document.querySelector(".message");
const userScore = document.querySelector(".score");
const userHighScore = document.querySelector(".highscore");
const backgroundColor = document.querySelector("body");
const restartButton = document.querySelector(".restart-quiz");
const containerQuestion = document.querySelector(".quiz-container");

// Declaring the question
// Doing this through a key-value map
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

// LOADING THE QUIZ QUESTIONS

// console.log(questionA);

containerQuestion.innerHTML = `${questionA.get("question")}
<br> <br>
${questionA.get("answer")}`;

console.log(questionA);

// ADD THE SUBMIT ANSWER FUNCTIONALITY
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
