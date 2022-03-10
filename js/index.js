function computerPlay() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        // console.log('Rock');
        return 'Rock';
    } else if (choiceNumber === 1) {
        // console.log('Paper');
        return 'Paper';
    } else {
        // console.log('Scissors');
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {

    
    playerSelection = (playerSelection.slice(0, 1)).toUpperCase() + (playerSelection.substr(1, (playerSelection.length - 1))).toLowerCase();

    if (computerSelection === 'Rock') {
        if (playerSelection === 'Rock') {
            return 'Draw!';
        } else if (playerSelection === 'Paper') {
            return 'You Win! Paper beats Rock';
        } else if (playerSelection === 'Scissors') {
            return 'You Lose! Rock beats Scissors';
        }
    } else if (computerSelection === 'Paper') {
        if (playerSelection === 'Rock') {
            return 'You Lose! Paper beats Rock';
        } else if (playerSelection === 'Paper') {
            return 'Draw!';
        } else if (playerSelection === 'Scissors') {
            return 'You Win! Scissors beat paper';
        }
    } else if (computerSelection === 'Scissors') {
        if (playerSelection === 'Rock') {
            return 'You Win! Rock beats Scissors';
        } else if (playerSelection === 'Paper') {
            return 'You Lose! Scissors beat paper';
        } else if (playerSelection === 'Scissors') {
            return 'Draw!';
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));