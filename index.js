function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let result;
    if (rand === 0) {
      result = 'rock';
    }
    else if (rand === 1) {
      result = 'paper';
    }
    else if (rand === 2) {
      result = 'scissors';
    }
    return result;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return 1;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return 2;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return 2;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return 1;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 1;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
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
        console.log('You lose! The score is ' + userScore + ' to ' + cpuScore + '.');
      }
      else if (playRound(input, getComputerChoice()) == 2) {
        userScore++;
        console.log('You win! The score is ' + userScore + ' to ' + cpuScore + '.');
      }
      else if (playRound(input, getComputerChoice()) == 3) {
        console.log('Tie! The score is ' + userScore + ' to ' + cpuScore + '.');
      }
    }
    if (userScore > cpuScore) {
      console.log('You win!');
    }
    else {
      console.log('You lose!')
    }
  }

  game();