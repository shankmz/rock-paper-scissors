//Make a list of 3 options- Rock, Paper, Scissor
//Ask the player’s name so we can display it on the scoreboard
//Initialize the scores of player and computer to 0 and number of rounds to 0.
//Set the gameOn flag to True
//While gameOn flag is True repeat steps 6 to 12
//Randomly generate one of the options from the list as ComputerOption
//Let the player choose any option from Rock, Paper, Scissor as PlayerOption.
//Increase number of rounds by 1
//If both player and computer, choose the same option then the current round ends in a draw. Else proceed to step 10
//Determine the winner based on the rules and increase the score of the winner by 1.
//Display the updated score.
//If the number of rounds is greater than 5 then set the gameOn flag to false and end the game.
//Choose and display the final winner based on the total score.


const compChoice = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function game() {
    for (let i = 0; i <= 4; i++) {
    playRound();
    
    
}   const gameWinner = winnerGame(playerScore, computerScore);
    console.log(gameWinner);

}
function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function getComputerChoice() {
    return compChoice [Math.floor(Math.random() * compChoice.length)];
}

function playerChoice() {
    let playerInput = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    return playerInput;
}

function checkWinner(choiceP, choiceC) {

    if (choiceP === choiceC) {
        return "It's a tie";
   }
   else if (choiceP === "rock" && choiceC === "paper") {
       return "You Lose " + ++computerScore;
   }
   
   else if (choiceP === "rock" && choiceC === "scissors") {
       return "You Win! " + ++playerScore;
   }
   
   else if (choiceP === "scissors" && choiceC === "rock") {
       return "You Lose " + ++computerScore;
   }
   
   else if (choiceP === "scissors" && choiceC === "paper") {
       return "You Win! " + ++playerScore;
   }
   
   else if (choiceP === "paper" && choiceC === "scissors") {
       return "You Lose! " + ++computerScore;
   }
   
   else (choiceP === "paper" && choiceC === "rock"); {
       return "You Win! " + ++playerScore;
   }
}

function winnerGame (winnerP, winnerC) {
    if (winnerP === winnerC) {
        return "Tie Game";
    } else if (winnerP > winnerC) {
        return "Game is Yours!";
    } else {
        return "Computers Game";
    }
}

game();

