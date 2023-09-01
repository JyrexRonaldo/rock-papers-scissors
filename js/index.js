game();

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "It's a tie";
  } else if (computerSelection === "Rock") {
    switch (playerSelection) {
      case "Paper":
        return "You Win!, Paper beats Rock";
        break;
      default:
        return "You Lose!, Rock beats Scissors";
        break;
    }
  } else if (computerSelection === "Paper") {
    switch (playerSelection) {
      case "Rock":
        return "You Lose!, Paper beats Rock";
        break;
      default:
        return "You Win!, Scissors beats Paper";
        break;
    }
  } else if (computerSelection === "Scissors") {
    switch (playerSelection) {
      case "Rock":
        return "You Win!, Rock beats Scissors";
        break;
      default:
        return "You Lose!, Scissors beats Paper";
        break;
    }
  }
}

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.slice(1, playerSelection.length).toLowerCase();
  return playerSelection;
}

function game() {
    let playerPoint = 0;
    let computerPoint = 0;
  
    for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);
    if (result.includes("Win")) {
      playerPoint += 1;
    } else if (result.includes("Lose")) {
      computerPoint += 1;
    } else if (result.includes("tie")) {
      playerPoint += 1;
      computerPoint += 1;
    }
  }
  
  if (playerPoint === computerPoint) {
    console.log(`It's a TIE!!!
    Player score: ${playerPoint}
    Computer score: ${computerPoint}`);
  } else if (playerPoint > computerPoint) {
    console.log(`YOU WON YAAAY!!!
    Player score: ${playerPoint}
    Computer score: ${computerPoint}`);
  } else {
    console.log(`LOSEEERRRR you lost!!!
    Player score: ${playerPoint}
    Computer score: ${computerPoint}`);
  }

  return;
}
