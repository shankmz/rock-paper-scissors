const compChoice = ["rock", "paper", "scissors"];

const selectionButtons = document.querySelectorAll("[data-selection]");
const playerScoreBoard = document.querySelector('[data-player-score');
const computerScoreBoard = document.querySelector('[data-computer-score');
const tieScoreBoard = document.querySelector('[data-ties-score');


selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    const computerSelection = getComputerChoice();
    const winner = checkWinner(selection, computerSelection)
    console.log(winner)
}

function getComputerChoice() {
    return compChoice [Math.floor(Math.random() * compChoice.length)];
}

function incrementScore(scoreBoard){
    scoreBoard.innerText = parseInt(scoreBoard.innerText) + 1
}

let computerScore = document.querySelector("computer-score");
let ties = document.querySelector("ties");
let playerScore = document.querySelector("player-score");


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

