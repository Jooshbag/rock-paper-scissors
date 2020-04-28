//global vars
//const roundScore = playRound();
let playerScore = 0;
let computerScore = 0;


document.getElementById('rock').onclick = playerRock;
document.getElementById('paper').onclick = playerPaper;
document.getElementById('scissors').onclick = playerScissors;


function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerRock()
{
    var computerSelection = computerPlay();
    var playerSelection = 'rock'
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

function playerPaper()
{
    var computerSelection = computerPlay();
    var playerSelection = 'paper'
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

function playerScissors()
{
    var computerSelection = computerPlay();
    var playerSelection = 'scissors'
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

 function playRound(playerSelection, computerSelection) {

    function win() {
        playerScore++;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('results').innerHTML = results;
    }
    
    function lose() {

        computerScore++;
        document.getElementById('computer-score').innerHTML = computerScore;
        document.getElementById('results').innerHTML = results;
    }
    function tie(){
        console.log('It\'s a tie!')
    }
  /*  let choices = ['rock', 'paper', 'scissors']; 
    if (playerSelection != choices)
        {prompt('Please try again').toLowerCase()}*/
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        results = 'Rock beats scissors. You win!';
        return win(); 
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        results = 'Paper beats rock. You Win!';
        return win();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        results = 'Scissors beats paper. You Win!';
        return win();
    }
    else if (playerSelection === computerSelection) {
        results = 'It\'s a tie!';
        return tie();
     }
    else {
        results = 'You lose.';
        return lose();}
    }


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


//show results

//repeat for 5 rounds