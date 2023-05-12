const playerChoice = getPlayerChoice(formatPlayerChoice, validatePlayerChoice);
const computerChoice = getComputerChoice();

console.log(`Player's choice: ${playerChoice}`);
console.log(`Computers's choice: ${computerChoice}`);

console.log(playRound(playerChoice, computerChoice));

// --- Function declarations & Helper functions ---

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

// Lowercasing strings returned from prompts makes validating
// input easier. A ternary operator is used here because
// .toLowerCase() cannot be performed on null if the user decides
// to cancel the prompt in getPlayerChoice().
function formatPlayerChoice(choice) {
  return typeof choice == "string" ? choice.toLowerCase() : null;
}

function validatePlayerChoice(choice) {
  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
    case null:
      return true;
    default:
      return false;
  }
}

// The function will prompt the user until a valid input is entered
// or the prompt is cancelled. The value is formatted and then
// passed to validatePlayerChoice(). The formatted value is returned
// once it passes validation.
function getPlayerChoice(formatChoice, validateChoice) {
  let formattedChoice;

  while (true) {
    const choice = prompt("Choose 'rock', 'paper', or 'scissors':");
    formattedChoice = formatChoice(choice);

    if (!validateChoice(formattedChoice)) continue;

    break;
  }

  return formattedChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == null) {
    return "Cancelled";
  } else if (playerChoice == computerChoice) {
    return "Tie";
  } else if (playerChoice == "rock" && computerChoice != "paper") {
    return "Player wins";
  } else if (playerChoice == "paper" && computerChoice != "scissors") {
    return "Player wins";
  } else if (playerChoice == "scissors" && computerChoice != "rock") {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}

function game() {}
