function findMultiples(integer, limit) {
  const result = []

  for (let i = integer; i <= limit; i += integer) {
    result.push(i)
  }

  return result
}
