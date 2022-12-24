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
        return 'You lose!';
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        return 'You win!';
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        return 'You win!';
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        return 'You lose!';
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        return 'You lose!';
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        return 'You Win!'
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 'Tie!';
    }
  }

  function game() {
    let userScore = 0;
    let cpuScore = 0;
    while (userScore !== 5 || cpuScore !== 5) {
        let input = prompt('Rock, Paper or Scissors')
    }
  }