console.log(playGame());

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
function getPlayerChoice() {
  let formattedChoice;

  while (true) {
    const choice = prompt("Choose 'rock', 'paper', or 'scissors':");

    formattedChoice = formatPlayerChoice(choice);

    if (!validatePlayerChoice(formattedChoice)) continue;

    break;
  }

  return formattedChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == null) {
    return "Cancelled";
  } else if (playerChoice == computerChoice) {
    return "Tied";
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

// Function accepts 3 functions as args: one to play a round
// of the game, and the other two as args to be passed into the
// function that handles round logic. This function also adds scores
// and returns the winner at the end.
// Additionally, I chose to use callbacks instead of using
// helper functions due to the fact that these functions needed to
// be ran inside game() and their values couldn't just be passed into game() due
// to the use of loops and the fact that new return values were needed for
// each iteration. I feel like it also adds to readability as far as understanding
// what the code does. However, i'm not sure if it would be better practice to
// just call the functions inside game()???
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    if (roundResult == "Cancelled") return "Game over";
    if (roundResult == "Player wins") playerScore++;
    if (roundResult == "Computer wins") computerScore++;

    console.log(`Round ${i + 1}:`);
    console.log(`Player's choice: ${playerChoice}`);
    console.log(`Computers's choice: ${computerChoice}`);
    console.log(`${roundResult} round
    `);
  }

  return playerScore > computerScore
    ? `!!! Player wins: ${playerScore} - ${computerScore} !!!`
    : playerScore < computerScore
    ? `!!! Computer wins: ${computerScore} - ${playerScore} !!!`
    : `!!! Tied game: ${computerScore} - ${playerScore} !!!`;
}
