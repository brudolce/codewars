Array.prototype.numberOfOccurrences = function(n) {
  return this.filter(x=>x===n).length
}
