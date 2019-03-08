function digPow(n, p) {
  const sum = String(n).split('').map(element => Number(element))
    .reduce((a, b) => {
      const result = a + b ** p
      p += 1
      return result
    }, 0)

  const k = sum / n

  return Number.isInteger(k) ? k : -1
}
