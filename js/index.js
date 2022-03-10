function computerPlay() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        console.log('Rock');
        return 'Rock';
    } else if (choiceNumber === 1) {
        console.log('Paper');
        return 'Paper';
    } else {
        console.log('Scissors');
        return 'Scissors';
    }
}


function playRound(computerSelection, playerSelection) {

    
    playerSelection = (playerSelection.slice(0, 1)).toUpperCase() + (playerSelection.substr(1, (playerSelection.length - 1))).toLowerCase()

    if (computerSelection === 'Rock') {
        if (playerSelection === 'Rock') {
            return 'Draw!'
        } else if (playerSelection === 'paper')
    }
}
