playGame();

// --- Function declarations & Helper functions ---

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  return randomNum == 1 ? "rock" : randomNum == 2 ? "paper" : "scissors";
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

function removeEvent(playRound) {
  const btns = document.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.removeEventListener("click", playRound);
    btn.disabled = true;
  });
}

function updatePlayerScore(roundResult, playerScore) {
  if (roundResult == "Player wins") playerScore++;
  return playerScore;
}

function updateComputerScore(roundResult, computerScore) {
  if (roundResult == "Computer wins") computerScore++;
  return computerScore;
}

function displayScore(playerScore, computerScore) {
  const playerPara = document.querySelector(".player-score");
  playerPara.textContent = playerScore;
  const computerPara = document.querySelector(".computer-score");
  computerPara.textContent = computerScore;
}

function displayWinner(roundResult, clicks, playerScore, computerScore) {
  const message = document.querySelector(".message");
  if (clicks < 5) {
    message.textContent = `R${clicks}: ${roundResult}.`;
  } else if (playerScore > computerScore) {
    message.textContent = "GAME OVER: Player wins!";
  } else if (playerScore < computerScore) {
    message.textContent = "GAME OVER: Computer wins!";
  } else {
    message.textContent = "GAME OVER: Tied!";
  }
}

/*
The Function listens for clicks on buttons and plays 1 round for each click 
(5 rounds total) and tracks player scores, displaying round, scores, and game winner in UI. 
Inner function created because logic relies on outer function variables. An external listener
can't be used in this case because values can't be returned from a listener, so the inner 
function needs access to the outer functions scope. 
*/
function playGame() {
  let clickCount = 0;
  let playerScore = 0;
  let computerScore = 0;
  const btns = document.querySelectorAll("button");

  const playRound = (e) => {
    clickCount++;
    if (clickCount > 4) removeEvent(playRound);

    const playerChoice = e.target.classList[0];
    const computerChoice = getComputerChoice();
    const roundResult = getRoundWinner(playerChoice, computerChoice);
    playerScore = updatePlayerScore(roundResult, playerScore);
    computerScore = updateComputerScore(roundResult, computerScore);

    displayScore(playerScore, computerScore);
    displayWinner(roundResult, clickCount, playerScore, computerScore);
  };

  displayScore(playerScore, computerScore); // Show initial scores
  btns.forEach((btn) => btn.addEventListener("click", playRound));
}
