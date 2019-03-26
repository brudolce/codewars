function sumDigits(number) {
  return number.toString().split('').reduce((a,e)=> e!=='-' ? a + parseInt(e) : a, 0)
}
