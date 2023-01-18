let cScore = 0;
let pScore = 0;

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  let result;
  if (rand === 0) {
    result = "rock";
  } else if (rand === 1) {
    result = "paper";
  } else if (rand === 2) {
    result = "scissors";
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    return 2;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    return 2;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    return 2;
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return 3;
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector("#restart");
const winLoss = document.querySelector("#winLoss");
const btn = document.querySelectorAll("input")

let result = document.querySelector("#results");

function diableButtons() {
  btn.forEach(elem => {
    elem.disabled = true;
  });
}

function updateScore() {
  let playerScore = document.querySelector("#playScore");
  playerScore.textContent = `User: ${pScore}`;

  let computerScore = document.querySelector("#compScore");
  computerScore.textContent = `Computer: ${cScore}`;
}

  winLoss.textContent = "First to 5 wins";
  rock.addEventListener("click", () => {
    if (playRound("rock", getComputerChoice()) == 1) {
      cScore++;
      result.textContent = "You lose!";
      updateScore();
    } else if (playRound("rock", getComputerChoice()) == 2) {
      pScore++;
      result.textContent = "You win!";
      updateScore();
    } else if (playRound("rock", getComputerChoice()) == 3) {
      result.textContent = "Draw!";
    }
  });

  paper.addEventListener("click", () => {
    if (playRound("paper", getComputerChoice()) == 1) {
      cScore++;
      result.textContent = "You lose!";
    } else if (playRound("paper", getComputerChoice()) == 2) {
      pScore++;
      result.textContent = "You win!";
    } else if (playRound("paper", getComputerChoice()) == 3) {
      result.textContent = "Draw!";
    }
  });

  scissors.addEventListener("click", () => {
    if (playRound("scissors", getComputerChoice()) == 1) {
      cScore++;
      result.textContent = "You lose!";
      updateScore();
    } else if (playRound("scissors", getComputerChoice()) == 2) {
      pScore++;
      result.textContent = "You win!";
      updateScore();
    } else if (playRound("scissors", getComputerChoice()) == 3) {
      result.textContent = "Draw!";
    }
  });
  if (playerScore.textContent = 'User: 5') {
    winLoss.textContent = "Too bad! you lost the game :(";
    diableButtons();
  }
  else if (computerScore.textContent = 'Computer: 5') {
    winLoss.textContent = "Congrats! you won the game :)";
    diableButtons();
  }

