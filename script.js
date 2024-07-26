let playerScore = 0;
let computerScore = 0;

function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
}

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultMessage = document.getElementById('resultMessage');
    const scoreDisplay = document.getElementById('score');
    
    if (playerChoice === computerChoice) {
        resultMessage.textContent = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        playerScore++;
    } else {
        resultMessage.textContent = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        computerScore++;
    }
    
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}