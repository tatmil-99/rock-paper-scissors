console.log(getComputerChoice());

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);

  return randomNum == 1
    ? "Rock"
    : randomNum == 2
    ? "Paper"
    : randomNum == 3
    ? "Scissors"
    : NaN;
}

function getPlayerChoice() {}

function round() {}

function game() {}
