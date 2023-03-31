"use strict";

// SELECT THE HTML ELEMENTS

//

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

// ADD THE SUBMIT ANSWER FUNCTIONALITY
let score = 0;
let highscore = 0;

inputAnswerBtn.addEventListener("click", function() {
  const userAnswer = Number(answerInput.value);

  // Update the Display Message

  // Add the score functionality

  // Add the highscore functionality
});

// Add the Restart Functionality
restartButton.addEventListener("click", function() {
  //Add the restart functionality
  //
});
