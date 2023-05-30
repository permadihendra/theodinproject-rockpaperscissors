// Get the input from player as playerSelection
// Assign value to computerSelection
// if playerSelection == computerSelection
//     then output "Draw"

// Function to get computer choice/ input
function getComputerChoice(choice) {
  choice = "Rock";
  return choice;
}

// Function to get player choice/input with promt windows
function getPlayerChoice(choice) {
  choice = prompt("Choose Rock, Paper, or Scissor ?");
  return choice;
}

// Initial variable to save points
let playerPoints = 0;
let computerPoints = 0;

// Function to compute conditional of rock paper scissor, with 2 parameter input
function playRound(playerSelection, computerSelection) {
  let results;

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

  // Function return the PLayer and Computer Point
  return `Player Point: ${playerPoints} vs Computer Points: ${computerPoints}`;
}

// Function game to loop the game
// this function will call playRound() function with input from get getPlayerChoice() and getComputerChoice() function
function game() {
  const round = 5;
  for (let i = 0; i < round; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }

  // this conditional to check who is the winner
  if (playerPoints < computerPoints) {
    console.log("Player Lose!");
  } else if (playerPoints > computerPoints) {
    console.log("Player Win!");
  } else console.log("Draw");
}

// Start the game / call game() function
game();
