function getComputerChoice() {
    const randomNumber = Math.random(); // between 0 (inclusive) and 1 (exclusive)
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}
// function of human choice
const prompt = require('prompt-sync')();
function getHumanChoice() {
  const userInput = prompt("Enter rock, paper, or scissors:");
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Make it case-insensitive
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log("It's a tie! Both chose " + human);
    return;
  }

  // Win conditions for human
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`);
  }
}

function playGame() {
  // Reset scores at the beginning
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Final winner log
  if (humanScore > computerScore) {
    console.log("\nCongratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("\nSorry! The computer won the game.");
  } else {
    console.log("\nIt's a tie game!");
  }
}

playGame();