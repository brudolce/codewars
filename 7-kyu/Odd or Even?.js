function oddOrEven(array) {
  return array.reduce((a, e) => a + e, 0) % 2 === 0 ? 'even' : 'odd'
}
