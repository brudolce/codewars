function GetSum(...range) {
  const rangeSort = range.sort((a, b) => a - b)
  if (rangeSort[0] === rangeSort[1]) return rangeSort[0]

  let result = 0
  for (let i = rangeSort[0]; i <= rangeSort[1]; i+= 1) {
    result += i
  }
  
  return result
}
