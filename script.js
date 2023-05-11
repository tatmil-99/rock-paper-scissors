//playRound(getPlayerChoice, getComputerChoice);

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);

  return randomNum == 1
    ? "rock"
    : randomNum == 2
    ? "paper"
    : randomNum == 3
    ? "scissors"
    : NaN;
}

function getPlayerChoice() {
  const choice = prompt("Choose 'Rock', 'Paper', or 'Scissors':").toLowerCase();

  return choice;
}

function playRound(playerChoice, computerChoice) {}

function game() {}
