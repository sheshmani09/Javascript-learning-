let numRandom = parseInt(Math.random() * 100 + 1);

const form = document.querySelector("form");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowhigh = document.querySelector(".lowOrHi");
const startOverbtn = document.querySelector(".startOverbtn");

let prevGuess = [];
let numGuess = 0;
let maxGuesses = 10;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const guess = parseInt(userInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMsg("Please Enter valid Number!!");
    userInput.value = "";
    return
  }

  prevGuess.push(guess);
  numGuess++;
  displayGuesses();

  if (guess === numRandom) {
    displayMsg("Congrats! you guessed the number correctly");
    endGame();
  } else if (guess < numRandom) {
    displayMsg("Too Low");
  } else if (guess > numRandom) {
    displayMsg("Too High");
  }

  if (numGuess === maxGuesses && guess !== numRandom) {
    displayMsg(`Game Over! Number was ${numRandom}`);
    endGame();
  }

  userInput.value = "";
});

function displayGuesses() {
  guessSlot.textContent = prevGuess.join(", ");
  remaining.textContent = maxGuesses - numGuess;
}
function displayMsg(msg) {
  lowhigh.textContent = msg;
}

function endGame() {
  userInput.disabled = true;
  startOverbtn.style.display = "block";
}

startOverbtn.addEventListener("click", () => {
  numRandom = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 0;
  guessSlot.textContent = "";
  remaining.textContent = maxGuesses;
  lowhigh.textContent = "";
  userInput.disabled = false;
  startOverbtn.style.display = "none";
});
