function powerOf4(n) {
  return n > 1 && typeof n === 'number' 
    ? Number.isInteger(Math.log(n)/Math.log(4))
    : false
}
