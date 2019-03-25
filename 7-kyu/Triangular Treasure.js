function triangular( n ) {
  if (n<1) return 0
  let result = 0, i;
  for (i = 0; i <= n; i += 1) {
    result += i
  }
  return result
}

//clever solution
function triangular( n ) {
  return (n > 0) ? ((n * n) + n) / 2 : 0;
}