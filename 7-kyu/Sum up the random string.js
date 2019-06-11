function sumFromString(str) {
  return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
}
