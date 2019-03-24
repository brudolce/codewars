function SeriesSum(n) {
  let result = 0
  while (n > 0){
    result += 1/(1+((n-1)*3));
    n -= 1
  }
  return String(result.toFixed(2))
}
