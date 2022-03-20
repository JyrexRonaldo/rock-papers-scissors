const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('div');
let round = 0;
let playerScore = 0;
let computerScore = 0;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let result = playRound(e.target.textContent, computerPlay());
            if (result.includes('Win')) {
                playerScore += 1;
                divDisplay();
                showWinner();
            } else if (result.includes('Lose')) {
                computerScore += 1;
                divDisplay();
                showWinner();
            } else {
                playerScore += 1;
                computerScore += 1;
                divDisplay();
                showWinner();
            }
            

            function divDisplay() {
                resultDiv.innerHTML = `Result: ${result} 
                <br>Round: ${round}
                <br>Player score: ${playerScore}
                <br>Computer score: ${computerScore}`;
            } 

        function showWinner() {
            if (playerScore === 5 && computerScore === 5) {
                resultDiv.innerHTML += `<br>You tied! play again!`;
                reset();
            } else if (playerScore === 5) {
                resultDiv.innerHTML += `<br>Yay, you win!`;
                reset();
            } else if (computerScore === 5) {
                resultDiv.innerHTML += `<br>You lose! better luck next time`;
                reset();
            }
        }

        round += 1;      
    });
    
}

function reset() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    resultDiv.innerHTML += ``;
}



function computerPlay() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        return 'Rock';
    } else if (choiceNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {

    playerSelection = (playerSelection.slice(0, 1)).toUpperCase() + 
    (playerSelection.substr(1, (playerSelection.length - 1))).toLowerCase();

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

// function game() {
//     let round = 0;
//     let playerScore = 0;
//     let computerScore = 0;

//     for (i = 0; i < 5; i++) {
//         let choice = prompt('Rock, paper or scissors?'); 
//         let result = playRound(choice, computerPlay())

//         if (result.includes('Win')) {
//             playerScore += 1;
//         } else if (result.includes('Lose')) {
//             computerScore += 1;
//         } else {
//             playerScore += 1;
//             computerScore += 1;
//         }
//         round += 1;
//     }

//     if (playerScore > computerScore) {
//         console.log('Yay, you win!');
//     } else if (playerScore < computerScore) {
//         console.log('You lose! better luck next time')
//     } else {
//         console.log('You tied! play again!')
//     }
// }

// game();