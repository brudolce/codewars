function findNb(m) {
  let sum = 0, n;
  for (n = 0; sum < m; n += 1) {
    sum = Math.pow(n*(n+1), 2) / 4;
  } if (sum === m) return n-1;
  else return (-1);
}
