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
