//console.log(playGame());
console.log(getPlayerChoice());

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

/*
Function gets player choice via event listener on buttons.
Function is also playing a round and may also have to house
game logic.
**Function name is a little underwhelming**
*/
function getPlayerChoice() {
  const btns = document.querySelectorAll("button");
  let playerScore = 0;
  let computerScore = 0;

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const playerChoice = e.target.className;
      const computerChoice = getComputerChoice();
      const roundResult = playRound(playerChoice, computerChoice);
      // Game logic will likely have to go in here due to score data not persisting with function call
      console.log(roundResult);
      if (roundResult == "Player wins") playerScore++;
      if (roundResult == "Computer wins") computerScore++;
      console.log(`player: ${playerScore}, computer: ${computerScore}`);
    });
  });
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == null) {
    // return "Cancelled";
  } else if (playerChoice == computerChoice) {
    // console.log("tied");
    return "Tied";
  } else if (playerChoice == "rock" && computerChoice != "paper") {
    // console.log("Player wins");
    return "Player wins";
  } else if (playerChoice == "paper" && computerChoice != "scissors") {
    // console.log("Player wins");
    return "Player wins";
  } else if (playerChoice == "scissors" && computerChoice != "rock") {
    // console.log("Player wins");
    return "Player wins";
  } else {
    // console.log("Computer wins");
    return "Computer wins";
  }
}

// Function calls 3 functions as helpers: getPlayerChoice, getComputerChoice, playRound.
// These functions are used as defined in a loop which iterates 5 times (5 rounds).
// This function also adds scores depending on round winner and returns the winner at the end
// of the game.
function playGame(roundResult) {
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
    console.log(`${roundResult} round`);
  }

  return playerScore > computerScore
    ? `!!! Player wins: ${playerScore} - ${computerScore} !!!`
    : playerScore < computerScore
    ? `!!! Computer wins: ${computerScore} - ${playerScore} !!!`
    : `!!! Tied game: ${computerScore} - ${playerScore} !!!`;
}
