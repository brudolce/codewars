function firstNonConsecutive(arr) {
  const result = arr.find((n, i) => n !== i + arr[0])
  return Number.isInteger(result) ? result : null
}
