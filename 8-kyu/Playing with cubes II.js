class Cube {
  constructor(n = 0) {
    this.setSide(n)
  }

  getSide() {
    return this.side
  }

  setSide(n) {
    if (typeof n !== 'number') throw new Error('Only numbers accepted')
    this.side = Math.abs(n)
  }
}
