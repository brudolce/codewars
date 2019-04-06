String.prototype.toAlternatingCase = function() {
  return this.replace(
    /[a-z]/gi,
    char => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
  )
}
