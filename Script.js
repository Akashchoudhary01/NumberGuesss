const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const button = document.getElementById("submitBtn");
const guessSlots = document.getElementById("guessSlots");
const remaningAttempts = document.getElementById("remaningAttempts")
let guessCount = 0;
// let remaningAttempts = 5;

let prevGuess = []
let numGuess = 1;
let playGame = true;


if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
  message.textContent = "⛔ Please enter a valid number between 1 and 100.";
  return;
}

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber); // For testing

button.addEventListener("click", function () {
  const userGuess = parseInt(input.value);


  guessCount++;
//   remaningAttempts--;

  if (userGuess > randomNumber) {
    message.textContent = "📈 Too high! Try again.";
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.innerHTML = `🎉 Correct! You guessed the number in <strong>${guessCount}</strong> attempts.`;
  }
});
