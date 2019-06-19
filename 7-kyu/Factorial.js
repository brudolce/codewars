function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
  return n>1?n*factorial(n-1):1;
}

//sol 2
const factorial = n =>
  n >= 0
    ? Array.from({ length: n }, (_, index) => index + 1).reduce(
        (total, value) => total * value,
        1
      )
    : null
