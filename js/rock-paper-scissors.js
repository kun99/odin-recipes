function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = 0;
  switch (playerSelection) {
    case "rock":
      playerChoice = 0;
    case "paper":
      playerChoice = 1;
      break;
    case "scissors":
      playerChoice = 2;
      break;
    default:
      playerChoice = -1;
  }

  if(playerChoice == -1){
    return "Invalid input";
  }

  if (playerChoice == computerSelection) {
    return "TIED";
  } else if (playerChoice == 0 && computerSelection == 1) {
    return "LOST";
  } else if (playerChoice == 1 && computerSelection == 0) {
    return "LOST";
  } else if (playerChoice == 2 && computerSelection == 1) {
    return "LOST";
  } else {
    return "WON";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?");
    console.log(playRound(playerSelection.toLowerCase(), getComputerChoice()));
  }
}

playGame();