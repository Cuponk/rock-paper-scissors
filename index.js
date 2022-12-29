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
    for (let i = 0; i < 5; i++) {
      let input = prompt('Rock, Paper, Scissors?')
      if (playRound(input, getComputerChoice()) == 1) {
        cpuScore++;
        console.log('You loose! The score is ' + userScore + ' to ' + cpuScore + '.');
      }
      if (playRound(input, getComputerChoice()) == 2) {
        userScore++;
        console.log('You win! The score is ' + userScore + ' to ' + cpuScore + '.');
      }
      if (playRound(input, getComputerChoice()) == 3) {
        cpuScore++;
        console.log('Tie! The score is ' + userScore + ' to ' + cpuScore + '.');
      }
    }
    if (userScore > cpuScore) {
      console.log('You win!');
    }
    else {
      console.log('You lose!');
    }
  }

  game();