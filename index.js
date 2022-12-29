function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let result;
    if (rand === 0) {
      result = 'Rock';
    }
    else if (rand === 1) {
      result = 'Paper';
    }
    else if (rand === 2) {
      result = 'Scissors';
    }
    return result;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        return 1;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        return 2;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        return 2;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        return 1;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        return 1;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        return 2;
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 3;
    }
  }

  function game() {
    let userScore = 0;
    let cpuScore = 0;
  }

  game();