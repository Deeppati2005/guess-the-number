const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");

let secretNumber = Math.floor(Math.random() * 20) + 1;

let gamescore = 20;
let gamehighscore = 20;

const checkResult = function () {
  if (!guess.value) {
    message.textContent = "NO NUMBER";
    gamescore = gamescore - 1;
  } else if (guess.value == secretNumber) {
    number.textContent = secretNumber;
    number.style.width = "25rem";
    score.textContent = 20;
    message.textContent = "CORRECT NUMBER";
    body.style.backgroundColor = "#60b347";

    if (score < gamehighscore) {
      gamehighscore = score;
    }
    highscore.textContent = gamescore;
  } else if (guess.value > secretNumber) {
    message.textContent = "TOO HIGH";
    gamescore = gamescore - 1;
    score.textContent = gamescore;

    if (gamescore < 1) {
      alert("GAME OVER");
    }
  } else if (guess.value < secretNumber) {
    message.textContent = "TO LOW";
    gamescore = gamescore - 1;
    score.textContent = gamescore;

    if (gamescore < 1) {
      alert("GAME OVER");
    }
  }
};
check.addEventListener("click", checkResult);

again.addEventListener("click", () => {
  gamescore = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  number.textContent = "?";
  guess.value = "";
  message.textContent = "Start Guessing ...";
  score.textContent = 20;

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
