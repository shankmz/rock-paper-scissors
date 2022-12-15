const compChoice = ["rock", "paper", "scissors"];

const selectionButtons = document.querySelectorAll("[data-selection]");
const playerScoreBoard = document.querySelector('[data-player-score');
const computerScoreBoard = document.querySelector('[data-computer-score');
const tieScoreBoard = document.querySelector('[data-ties-score');
const gameOver = document.querySelector('.game-over');

let computerScore = document.querySelector("computer-score");
let ties = document.querySelector("ties");
let playerScore = document.querySelector("player-score");
let roundCount = 0;

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        let selectionName = selectionButtons.dataset.selection
        playRound(selectionName)
        
    })
})

function playRound(selection) {
    const computerSelection = getComputerChoice();
    checkWinner(selection, computerSelection);
    if (roundCount >= 5) {
        return winnerGame(playerScore, computerScore);
    }
}

/*function game() {
    for (let i = 0; i <= 4; i++){
        playRound();
    }
    //winnerGame(playerScore, computerScore); 
}*/

function winnerGame (winnerP, winnerC) {
    if (winnerP === winnerC) {
        return gameOver.textContent = 'Tie Game';
    } else if (winnerP > winnerC) {
        return gameOver.textContent = "You have defeated the machines!";
    } else {
        return gameOver.textContent = "Skynet has won";
    }
}

function getComputerChoice() {
    return compChoice [Math.floor(Math.random() * compChoice.length)];
}

function incrementScore(scoreBoard){
    scoreBoard.innerText = parseInt(scoreBoard.innerText) + 1
}

function checkWinner(choiceP, choiceC) {

    if (choiceP === choiceC) {
        return incrementScore(tieScoreBoard) + ++ties + ++roundCount;
   }
   else if (choiceP === "rock" && choiceC === "paper") {
       return incrementScore(computerScoreBoard) + ++computerScore + ++roundCount;
   }
   
   else if (choiceP === "rock" && choiceC === "scissors") {
       return incrementScore(playerScoreBoard) + ++playerScore + ++roundCount;
   }
   
   else if (choiceP === "scissors" && choiceC === "rock") {
       return incrementScore(computerScoreBoard) + ++computerScore + ++roundCount;
   }
   
   else if (choiceP === "scissors" && choiceC === "paper") {
       return incrementScore(playerScoreBoard) + ++playerScore + ++roundCount;
   }
   
   else if (choiceP === "paper" && choiceC === "scissors") {
       return incrementScore(computerScoreBoard) + ++computerScore + ++roundCount;
   }
   
   else (choiceP === "paper" && choiceC === "rock"); {
       return incrementScore(playerScoreBoard) + ++playerScore + ++roundCount;
   }
}


