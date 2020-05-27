let playerScore = 0;
let computerScore = 0;

//getting button input
document.getElementById('rock').onclick = playerRock;
document.getElementById('paper').onclick = playerPaper;
document.getElementById('scissors').onclick = playerScissors;


function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerRock()
{
    var computerSelection = computerPlay();
    var playerSelection = 'Rock'
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

function playerPaper()
{
    var computerSelection = computerPlay();
    var playerSelection = 'Paper'
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

function playerScissors()
{
    var computerSelection = computerPlay();
    var playerSelection = 'Scissors'
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

//function thats called after each button press
 function playRound(playerSelection, computerSelection) {
    document.getElementById('playerChoice').innerHTML = playerSelection.toUpperCase();
    document.getElementById('computerChoice').innerHTML = computerSelection.toUpperCase();
    //result functions
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
        document.getElementById('results').innerHTML = results;
    }
    //grabbing results
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        results = 'Rock beats scissors. You win!';
        return win(); 
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        results = 'Paper beats rock. You Win!';
        return win();
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        results = 'Scissors beats paper. You Win!';
        return win();
    }
    else if (playerSelection === computerSelection) {
        results = 'It\'s a tie!';
        return tie();
     }
    else {
        results = computerSelection + ' beats ' + playerSelection.toLowerCase() + '. You lose.';
        return lose();}
    }