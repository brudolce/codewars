function game(n) {
  let ans = n * n;
  return (n % 2 !== 0) ? [ans, 2] : [ans / 2];
}
