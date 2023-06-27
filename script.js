playGame();

// --- Function declarations & Helper functions ---

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);

  if (randomNum == 1) return "rock";
  else if (randomNum == 2) return "paper";
  else return "scissors";
}

function getRoundWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
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

function displayScore(playerScore, computerScore) {
  const playerPara = document.querySelector(".player-score");
  playerPara.textContent = playerScore;
  const computerPara = document.querySelector(".computer-score");
  computerPara.textContent = computerScore;
}

/*
The Function listens for clicks on buttons and plays 1 round for each click 
(5 rounds total) and tracks player scores, displaying round and game winner in UI. 
Nested function created because logic relies on outer variables and must be
named/referenced in order to remove the event listener after 5 rounds.
*/
function playGame() {
  const playRound = (e) => {
    clickCount++;

    if (clickCount >= 5) {
      btns.forEach((btn) => {
        btn.removeEventListener("click", playRound);
        btn.disabled = true;
      });
    }

    const playerChoice = e.target.classList[0];
    const computerChoice = getComputerChoice();
    const roundResult = getRoundWinner(playerChoice, computerChoice);

    if (roundResult == "Player wins") playerScore++;
    else if (roundResult == "Computer wins") computerScore++;

    playerPara.textContent = playerScore;
    computerPara.textContent = computerScore;
    console.log(`${roundResult} round: ${playerScore} - ${computerScore}`); // Display in UI
  };

  let clickCount = 0;

  let playerScore = 0;
  const playerPara = document.querySelector(".player-score");
  playerPara.textContent = playerScore; // Display initial score

  let computerScore = 0;
  const computerPara = document.querySelector(".computer-score");
  computerPara.textContent = computerScore; // Display initial score

  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => btn.addEventListener("click", playRound));
}

// Function calls 3 functions as helpers: getPlayerChoice, getComputerChoice, playRound.
// These functions are used as defined in a loop which iterates 5 times (5 rounds).
// This function also adds scores depending on round winner and returns the winner at the end
// of the game.
// function playGame(roundResult) {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const playerChoice = playGame();
//     const computerChoice = getComputerChoice();
//     const roundResult = getRoundWinner(playerChoice, computerChoice);

//     if (roundResult == "Cancelled") return "Game over";
//     if (roundResult == "Player wins") playerScore++;
//     if (roundResult == "Computer wins") computerScore++;

//     console.log(`Round ${i + 1}:`);
//     console.log(`Player's choice: ${playerChoice}`);
//     console.log(`Computers's choice: ${computerChoice}`);
//     console.log(`${roundResult} round`);
//   }

//   return playerScore > computerScore
//     ? `!!! Player wins: ${playerScore} - ${computerScore} !!!`
//     : playerScore < computerScore
//     ? `!!! Computer wins: ${computerScore} - ${playerScore} !!!`
//     : `!!! Tied game: ${computerScore} - ${playerScore} !!!`;
// }
