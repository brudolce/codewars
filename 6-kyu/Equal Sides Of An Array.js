const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = arr =>
  arr.findIndex((_, i) => sum(arr, 0, i) === sum(arr, i + 1))
