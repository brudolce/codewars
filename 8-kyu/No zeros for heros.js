function noBoringZeros(n) {
  return +(n+'').replace(/0+$/g,'')
}

//solution 2
function noBoringZeros(n) {
  return +(`${n}`.replace(/0+$/, ''))
}
