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

function getComputerChoice(compChoice) {
    return compChoice [Math.floor(Math.random()*compChoice.length)];
    
}
const compChoice = ["Rock", "Paper", "Scissors"];
console.log (getComputerChoice(compChoice));


