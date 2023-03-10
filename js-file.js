// Present User Selection
const userSelectionContainer = document.querySelector('#user-selection');

// Present Computer Selection
const compSelectionContainer = document.querySelector('#comp-selection');

// Report Win/Loss/Draw
const resultSelectionContainer = document.querySelector('#result');

// Track Player and Computer Score
let playerScore = 0;
let computerScore = 0;

// Report Player Score
const playerScoreContainer = document.querySelector('#player-score');

// Report Computer Score
const computerScoreContainer = document.querySelector('#computer-score');

// Create a function that randomly selects rock, paper, or scissors for the computer's choice
function getComputerChoice() {
    let itemSelection = ["rock", "paper", "scissors"];
    let randomItemSelector = Math.floor(Math.random() * 3);
    compSelectionContainer.textContent = itemSelection[randomItemSelector].toUpperCase();
    return itemSelection[randomItemSelector];
}

// Define the playRound function that compared the payer's and computer's choice to determine who won
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winPairs = {"rock": "scissors", "scissors": "paper", "paper": "rock"};
    if (playerSelection == computerSelection) {
        resultSelectionContainer.textContent = "IT'S A DRAW!";
    } else if (winPairs[playerSelection] == computerSelection) {
        resultSelectionContainer.textContent = "YOU WON!!";
        playerScore += 1;
    } else {
        resultSelectionContainer.textContent = "YOU LOST!";
        computerScore += 1;
    }
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    playerScoreContainer.textContent = "Player: " + playerScore;
    computerScoreContainer.textContent = "Computer: " + computerScore;
}

// Add event listeners for each of the buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound("rock",getComputerChoice());
    userSelectionContainer.textContent = "ROCK";
});

paper.addEventListener('click', () => {
    playRound("paper",getComputerChoice());
    userSelectionContainer.textContent = "PAPER";
});

scissors.addEventListener('click', () => {
    playRound("scissors",getComputerChoice());
    userSelectionContainer.textContent = "SCISSORS";
});
