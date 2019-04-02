function sumDigPow(a, b) {
  const result = []

  for (let i = a; i < b; i += 1) {
    const number = String(i).split('')
      .reduce((acc, value, index) => acc + value ** (index + 1), 0)

    if (number === i) result.push(i)
  }

  return result
}
