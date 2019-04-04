const rps = (p1, p2) => {
  let p = 'paper', s = 'scissors', r = 'rock';
  if (p1===s && p2===p) return `Player 1 won!`
  if (p1===p && p2===r) return `Player 1 won!`
  if (p1===r && p2===s) return `Player 1 won!`
  if (p2===s && p1===p) return `Player 2 won!`
  if (p2===p && p1===r) return `Player 2 won!`
  if (p2===r && p1===s) return `Player 2 won!`
  return `Draw!`
};


// being smart
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
