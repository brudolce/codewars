class Warrior {
  constructor(newName) {
    this.wName = newName
  }

  name(newName) {
    if (newName) {
      this.wName = newName
    }
    return this.wName
  }
}

Warrior.prototype.toString = function() {
  return `Hi! my name's ${this.wName}`
}
