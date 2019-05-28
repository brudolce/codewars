const hotpo = (n, acc = 0) =>
  n <= 1 ? acc : hotpo(n % 2 === 0 ? n / 2 : 3 * n + 1, acc + 1)
