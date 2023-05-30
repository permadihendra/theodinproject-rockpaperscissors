// Get the input from player as playerSelection
// Assign value to computerSelection
// if playerSelection == computerSelection
//     then output "Draw"

function getComputerChoice(choice) {
  choice = "Rock";
  return choice;
}

function getPlayerChoice(choice) {
  choice = prompt("Choose Rock, Paper, or Scissor ?");
  return choice;
}

// let playerSelection = prompt("Choose Rock, Paper, or Scissor ?");
// const computerSelection = getComputerChoice();
let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
  let results;
  //   return `You Lose! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    results = "You Draw!";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    computerPoints = computerPoints + 1;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissor"
  ) {
    playerPoints = playerPoints + 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    playerPoints = playerPoints + 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissor"
  ) {
    computerPoints = computerPoints + 1;
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    computerPoints = computerPoints + 1;
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    playerPoints = playerPoints + 1;
  }

  return `Player Point: ${playerPoints} vs Computer Points: ${computerPoints}`;
}

function game() {
  const round = 5;
  for (let i = 0; i < round; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }

  if (playerPoints < computerPoints) {
    console.log("Player Lose!");
  } else if (playerPoints > computerPoints) {
    console.log("Player Win!");
  } else console.log("Draw");
}

game();
