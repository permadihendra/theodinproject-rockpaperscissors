// Get the input from player as playerSelection
// Assign value to computerSelection
// if playerSelection == computerSelection
//     then output "Draw"

function getComputerChoice(choice) {
  choice = "Rock";
  return choice;
}

// let playerSelection = prompt("Choose Rock, Paper, or Scissor ?");
// const computerSelection = getComputerChoice();
let playerPoints = 0;
let computerPoints = 0;

function playRound(
  playerSelection = prompt("Choose Rock, Paper, or Scissor ?"),
  computerSelection = getComputerChoice()
) {
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

console.log(
  playRound(
    (playerSelection = prompt("Choose Rock, Paper, or Scissor ?")),
    (computerSelection = getComputerChoice())
  )
);
console.log(
  playRound(
    (playerSelection = prompt("Choose Rock, Paper, or Scissor ?")),
    (computerSelection = getComputerChoice())
  )
);
console.log(
  playRound(
    (playerSelection = prompt("Choose Rock, Paper, or Scissor ?")),
    (computerSelection = getComputerChoice())
  )
);
console.log(
  playRound(
    (playerSelection = prompt("Choose Rock, Paper, or Scissor ?")),
    (computerSelection = getComputerChoice())
  )
);
console.log(
  playRound(
    (playerSelection = prompt("Choose Rock, Paper, or Scissor ?")),
    (computerSelection = getComputerChoice())
  )
);

if (playerPoints < computerPoints) {
  console.log("Player Lose!");
} else if (playerPoints > computerPoints) {
  console.log("Player Win!");
} else console.log("Draw");
