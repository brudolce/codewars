function numbersWithDigitInside(n, d) {
  var res = [];
  for (let i = 1; i <= n; i++) {
    if (new RegExp(d).test(i + "")) res.push(i);
  }
  return [res.length, res.reduce((s, c) => s + c, 0), res.length ? res.reduce((s, c) => s * c, 1) : 0];
}
