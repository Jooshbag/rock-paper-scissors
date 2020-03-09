//global vars
const choices = ['rock', 'paper', 'scissors'];
const playerSelection = playerChoice();
const computerSelection = computerPlay();

//function to play the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return true; 
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return true;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return true;
    }
    else if (playerSelection == computerSelection) {
        return 0;
    }
    else return false;
    }

//get the players choice
function playerChoice(){
    let playerInput = prompt('What\'s your choice?').toLowerCase();
    return playerInput; 
}
//get the computer's random choice
function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(computerSelection)
console.log(playerSelection)

//show results

//repeat for 5 rounds