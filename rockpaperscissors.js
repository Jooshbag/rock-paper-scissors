//global vars
//const roundScore = playRound();
const playerSelection = playerChoice();
const computerSelection = computerPlay();

//get the players choice
function playerChoice(){
    let playerInput = prompt('What\'s your choice?').toLowerCase();
    if (playerInput != 'rock' && playerInput != 'paper' && playerInput != 'scissors') {
        playerInput = prompt('Please try again.')
    }
    else {
    return playerInput;
    }
}
function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    
}

/* function playRound(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    function win() {
        playerScore++;
        console.log(playerSelection + ' beats ' + computerSelection + '. You win! Your score: ' + playerScore + ' Computer\'s Score: ' + computerScore)
    }
    
    function lose() {

        computerScore++;
        console.log(computerSelection+' beats '+playerSelection+'. you lose! Your score: '+playerScore+' Computer\'s score: '+computerScore)
    }
    function tie(){
        console.log('It\'s a tie!')
    }
    let choices = ['rock', 'paper', 'scissors']; 
    if (playerSelection != choices)
        {prompt('Please try again').toLowerCase()}
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return win(); 
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return win();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return win();
    }
    else if (playerSelection === computerSelection) {
        return tie();
     }
    else {return lose();}
    } */

/*function game() {
    playRound();
    if (roundScore == true) {
        playerScore++;
        console.log(playerSelection + ' beats ' + computerSelection + '. You win! Your score: ' + playerScore + ' Computer\'s Score: ' + computerScore)
    }
    else if (roundScore == false){
        computerScore++;
        console.log(computerSelection+' beats '+playerSelection+'. you lose! Your score: '+playerScore+' Computer\'s score: '+computerScore)   
        }
  //  else (roundScore == 0)
   // console.log('its\'s a tie!')
}*/





console.log(computerSelection)
console.log(playerSelection)

//show results

//repeat for 5 rounds