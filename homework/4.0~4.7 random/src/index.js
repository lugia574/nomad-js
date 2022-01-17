const gameForm = document.querySelector("#game-form");
const board = document.querySelector("#board");
const response = document.querySelector("#response");

function onRanGuessGame(event) {
  let gameRange = document.querySelector("#game-form h2 input:first-child");
  let gameGuessNumber = document.querySelector(
    "#game-form p input:first-child"
  );

  event.preventDefault();

  gameRange = Number(gameRange.value);
  gameGuessNumber = Number(gameGuessNumber.value);

  const answerNumber = Math.floor(Math.random() * (gameRange + 1));

  board.innerText = `You chose: ${gameGuessNumber}, the machine chose: ${answerNumber}`;
  if (gameGuessNumber === answerNumber) {
    response.innerText = "You won!";
  } else {
    response.innerText = "You lost!";
  }
}

gameForm.addEventListener("submit", onRanGuessGame);
