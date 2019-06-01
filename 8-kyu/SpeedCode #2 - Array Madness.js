function arrayMadness(a, b) {
  return [...a].reduce((x, y) => x + y ** 2, 0)>[...b].reduce((x, y) => x + y ** 3, 0)
}
