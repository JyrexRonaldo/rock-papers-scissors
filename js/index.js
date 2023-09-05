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

function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    let result = "";
    let round = 0;
    const display = document.querySelector('.display')
    const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.textContent;
    result = playRound(playerSelection, getComputerChoice());
    console.log(result)
    if (result.includes("Win")) {
      playerPoint += 1;
    } else if (result.includes("Lose")) {
      computerPoint += 1;
    } else if (result.includes("tie")) {
      playerPoint += 1;
      computerPoint += 1;
    }
    round += 1
    console.log(`Player Score: ${ playerPoint}`);
    console.log(`Computer Score ${computerPoint}`);
    display.innerText = `Round: ${round}
    Player Score: ${ playerPoint} 
    Computer Score ${computerPoint}`;

    if (round === 5) {
      if (playerPoint === computerPoint) {
        display.innerText = `It's a TIE!!!
        Player score: ${playerPoint}
        Computer score: ${computerPoint}`;
      } else if (playerPoint > computerPoint) {
        display.innerText = `YOU WON YAAAY!!!
        Player score: ${playerPoint}
        Computer score: ${computerPoint}`;
      } else {
        display.innerText = `LOSEEERRRR you lost!!!
        Player score: ${playerPoint}
        Computer score: ${computerPoint}`;
      }

      playerPoint = 0;
      computerPoint = 0;
      round = 0;
      result = "";

    }
  });
});
  return;
}
