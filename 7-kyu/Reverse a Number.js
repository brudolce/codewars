function reverseNumber(n) {
  return n < 0 
  ? +String(n).split('').filter(x=>/\d/g.test(x)).reverse().join('') * -1
  : +String(n).split('').reverse().join('')
}
