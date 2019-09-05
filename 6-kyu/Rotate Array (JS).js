function rotate(array, n) {
  n = n % array.length
  return array.slice(-n).concat(array.slice(0, -n))
}
