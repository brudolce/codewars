const zeros = n => {
  let zeros = 0
  while (n > 0) {
    n = Math.floor(n / 5)
    zeros += n
  }
  return zeros
}
