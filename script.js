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

function removeEvent(btns, playRound) {
  btns.forEach((btn) => {
    btn.removeEventListener("click", playRound);
    btn.disabled = true;
  });
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
  let clickCount = 0;

  let playerScore = 0;
  const playerPara = document.querySelector(".player-score");
  playerPara.textContent = playerScore; // Display initial score

  let computerScore = 0;
  const computerPara = document.querySelector(".computer-score");
  computerPara.textContent = computerScore; // Display initial score

  const playRound = (e) => {
    clickCount++;
    if (clickCount >= 5) removeEvent(btns, playRound);

    const playerChoice = e.target.classList[0];
    const computerChoice = getComputerChoice();
    const roundResult = getRoundWinner(playerChoice, computerChoice);

    if (roundResult == "Player wins") {
      playerScore++;
      playerPara.textContent = playerScore;
    } else if (roundResult == "Computer wins") {
      computerScore++;
      computerPara.textContent = computerScore;
    }

    console.log(`${roundResult} round: ${playerScore} - ${computerScore}`); // Display in UI
  };

  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => btn.addEventListener("click", playRound));
}
