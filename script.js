//console.log(playGame());
getPlayerChoice();

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
// toLowerCase cannot be performed on null if the user decides
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

/**
 * This function prompts for user input with aid from formatPlayerChoice
 * and validatePlayerChoice.
 * @returns {(string|null)} Players choice or null if prompt is cancelled
 */
function getPlayerChoice() {
  // let formattedChoice;

  // while (true) {
  //   const choice = prompt("Choose 'rock', 'paper', or 'scissors':");

  //   formattedChoice = formatPlayerChoice(choice);

  //   if (!validatePlayerChoice(formattedChoice)) continue;

  //   break;
  // }

  // return formattedChoice;

  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let target = e.target.className;
      console.log(target);
    });
  });
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

// Function calls 3 functions as helpers: getPlayerChoice, getComputerChoice, playRound.
// These functions are used as defined in a loop which iterates 5 times (5 rounds).
// This function also adds scores depending on round winner and returns the winner at the end
// of the game.
// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     const roundResult = playRound(playerChoice, computerChoice);

//     if (roundResult == "Cancelled") return "Game over";
//     if (roundResult == "Player wins") playerScore++;
//     if (roundResult == "Computer wins") computerScore++;

//     console.log(`Round ${i + 1}:`);
//     console.log(`Player's choice: ${playerChoice}`);
//     console.log(`Computers's choice: ${computerChoice}`);
//     console.log(`${roundResult} round
//     `);
//   }

//   return playerScore > computerScore
//     ? `!!! Player wins: ${playerScore} - ${computerScore} !!!`
//     : playerScore < computerScore
//     ? `!!! Computer wins: ${computerScore} - ${playerScore} !!!`
//     : `!!! Tied game: ${computerScore} - ${playerScore} !!!`;
// }
