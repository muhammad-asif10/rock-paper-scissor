// 1. Store the login name to use in our announcements
const playerName = "asif";

// Keep track of the running score
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// Grab all our DOM elements
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const roundAnnouncement = document.querySelector('#round-announcement');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const gameWinnerDisplay = document.querySelector('#game-winner');

// Helper function for the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// 4. Add event listeners to the buttons that call playRound
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

// 2 & 5. playRound function refactored to use DOM methods instead of console.log
function playRound(playerSelection, computerSelection) {
    // Prevent playing more rounds if someone already won
    if (playerScore >= winningScore || computerScore >= winningScore) {
        return; 
    }

    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // 5. Change all console.logs into DOM methods
    roundAnnouncement.textContent = roundResult;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // 6. Check if anyone has reached 5 points yet
    checkWinner();
}

function checkWinner() {
    if (playerScore === winningScore) {
        gameWinnerDisplay.textContent = `🏆 Congratulations ${playerName}, you won the game!`;
        gameWinnerDisplay.style.color = "green";
        disableButtons();
    } else if (computerScore === winningScore) {
        gameWinnerDisplay.textContent = `💀 Game Over! The computer defeated ${playerName}.`;
        gameWinnerDisplay.style.color = "red";
        disableButtons();
    }
}

// Optional: Disable buttons once a winner is decided
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}