const compChoice = ["rock", "paper", "scissors"];

const selectionButtons = document.querySelectorAll("[data-selection]");
const playerScoreBoard = document.querySelector('[data-player-score');
const computerScoreBoard = document.querySelector('[data-computer-score');
const tieScoreBoard = document.querySelector('[data-ties-score');

let computerScore = document.querySelector("computer-score");
let ties = document.querySelector("ties");
let playerScore = document.querySelector("player-score");

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        let selectionName = selectionButtons.dataset.selection
        //playRound(selectionName)
        
    })
})

function playRound(selection) {
    const computerSelection = getComputerChoice();
    checkWinner(selection, computerSelection);

}

function game() {
    for (let i = 0; i <= 4; i++){
        
    }
    winnerGame(playerScore, computerScore);
}

function winnerGame (winnerP, winnerC) {
    if (winnerP === winnerC) {
        return alert ("Tie Game");
    } else if (winnerP > winnerC) {
        return alert ("You have defeated the machines!");
    } else {
        return alert ("Skynet has won");
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
        return incrementScore(tieScoreBoard) + ++ties;
   }
   else if (choiceP === "rock" && choiceC === "paper") {
       return incrementScore(computerScoreBoard) + ++computerScore;
   }
   
   else if (choiceP === "rock" && choiceC === "scissors") {
       return incrementScore(playerScoreBoard) + ++playerScore;
   }
   
   else if (choiceP === "scissors" && choiceC === "rock") {
       return incrementScore(computerScoreBoard) + ++computerScore;
   }
   
   else if (choiceP === "scissors" && choiceC === "paper") {
       return ++playerScore;
   }
   
   else if (choiceP === "paper" && choiceC === "scissors") {
       return incrementScore(computerScoreBoard) + ++computerScore;
   }
   
   else (choiceP === "paper" && choiceC === "rock"); {
       return incrementScore(playerScoreBoard) + ++playerScore;
   }
}


