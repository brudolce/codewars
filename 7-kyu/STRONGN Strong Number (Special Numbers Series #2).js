const strong = n =>
  [...String(n)].map(Number).reduce((total, digit) => total + factorial(digit), 0) === n
    ? 'STRONG!!!!'
    : 'Not Strong !!'
    
 const factorial = n => (n < 0 ? null : n === 0 ? 1 : n * factorial(--n))
