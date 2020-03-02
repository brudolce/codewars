function SnakesLadders () {
  this.special = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80
  }
  this.position = {1: 0, 2: 0}
  this.turn = 1
  this.gameover = false
}

SnakesLadders.prototype.play = function (die1, die2) {
  if (this.gameover) return 'Game over!'
  var val = this.position[this.turn]
  val += die1 + die2

  // Handle bouncing from last square
  if (val > 100) val = 200 - val

  // Handle special squares (snakes or ladders)
  val = this.special[val] || val

  // Update position
  this.position[this.turn] = val

  // Check for winning move
  if (val === 100) {
    this.gameover = true
    return `Player ${this.turn} Wins!`
  }

  // Prepare message before switching turns
  var msg = `Player ${this.turn} is on square ${this.position[this.turn]}`

  // Switch turns
  if (die1 !== die2) this.turn = 3 - this.turn

  return msg
}
