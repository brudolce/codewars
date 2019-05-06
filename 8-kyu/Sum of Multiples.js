const sumMul = (n, m) => {
  if (n >= m) return 'INVALID'

  const last = Math.ceil(m / n) * n - n
  return (last + n) * (last / n) / 2
}

//regular solution
function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
