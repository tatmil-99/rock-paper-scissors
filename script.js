// const playerChoice = getPlayerChoice(formatPlayerChoice, validatePlayerChoice);
// const computerChoice = getComputerChoice();

// console.log(`Player's choice: ${playerChoice}`);
// console.log(`Computers's choice: ${computerChoice}`);

//const round = playRound(playerChoice, computerChoice);

console.log(game(playRound, getPlayerChoice, getComputerChoice));

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
    return "Player";
  } else if (playerChoice == "paper" && computerChoice != "scissors") {
    return "Player";
  } else if (playerChoice == "scissors" && computerChoice != "rock") {
    return "Player";
  } else {
    return "Computer";
  }
}

// Function accepts 3 functions as args: one to play a round
// of the game, and the other two as args to be passed into the
// function that handles round logic. The function which gets
// player choice also accepts args of its own, which are not listed
// as parameters here. This function also adds scores and returns
// the winner at the end.

// !!! This function needs cleaned up, as do the others.
// Passing helper functions as args into other functions is unmaintainable and
// hard to follow !!!
function game(round, getPlayerChoice, getComputerChoice) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice(
      formatPlayerChoice,
      validatePlayerChoice
    );
    const computerChoice = getComputerChoice();

    console.log(`Player's choice: ${playerChoice}`);
    console.log(`Computers's choice: ${computerChoice}`);

    const roundResult = round(playerChoice, computerChoice);

    if (roundResult == "Cancelled") return "Game over";
    if (roundResult == "Player") playerScore++;
    if (roundResult == "Computer") computerScore++;

    console.log(`Round ${i + 1}: ${roundResult} wins round`);
  }

  return playerScore > computerScore
    ? `Player wins: ${playerScore} - ${computerScore}`
    : playerScore < computerScore
    ? `Computer wins: ${computerScore} - ${playerScore}`
    : "Tie";
}
