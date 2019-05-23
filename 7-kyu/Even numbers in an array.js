function evenNumbers(array, number) {
  let result = array.filter(x=>x%2===0)
  return result.slice(result.length-number)
}
