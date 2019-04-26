class Warrior {
  constructor(name) {
    this.name = name
    this.health = 100
  }

  strike(enemy, swings) {
    enemy.health -= 10 * swings
  }
}
