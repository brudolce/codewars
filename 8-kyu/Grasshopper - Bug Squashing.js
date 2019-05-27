var health = 100
var position = 0
var coins = 0

const main = () =>
  [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
    action()
  )
