playRound(getPlayerChoice, getComputerChoice);

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

function validatePlayerChoice() {} // Ensure player enters only valid choices

function getPlayerChoice() {
  const choice = prompt("Choose 'Rock', 'Paper', or 'Scissors':").toLowerCase();

  return choice;
}

function playRound(playerChoice, computerChoice) {
  const player = playerChoice();
  const computer = computerChoice();
  console.log(`Player's choice: ${player}`);
  console.log(`Computers's choice: ${computer}`);

  if (player == computer) {
    return "Tie";
  } else if (player == "rock" && computer != "paper") {
    return "Player wins";
  } else if (player == "paper" && computer != "scissors") {
    return "Player wins";
  } else if (player == "scissors" && computer != "rock") {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}

function game() {}
