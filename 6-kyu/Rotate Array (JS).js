//fancy shit
function rotate(array, p) {
  p = p % array.length
  return array.slice(-p).concat(array.slice(0, -p))
}
