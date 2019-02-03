Array.prototype.square = function() {
  return this.map(number => number ** 2)
}

Array.prototype.cube = function() {
  return this.map(number => number ** 3)
}

Array.prototype.average = function() {
  return this.sum() / this.length
}

Array.prototype.sum = function() {
  return this.reduce((total, actual) => total + actual, 0)
}

Array.prototype.even = function() {
  return this.filter(number => number % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(number => number % 2 !== 0)
}
