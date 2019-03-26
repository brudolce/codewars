function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1

  const length1 = a1.map(str => str.length)
  const length2 = a2.map(str => str.length)

  return Math.max(
    Math.max(...length1) - Math.min(...length2),
    Math.max(...length2) - Math.min(...length1)
  )
}
