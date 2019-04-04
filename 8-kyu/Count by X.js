function countBy(x, n) {
  let result = [];
  for(let i = x; i <= (n*x); i += x) {
    result.push(i)
  }
  return result;
}
