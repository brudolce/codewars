function iterPi(epsilon) {
  var pi = 0, count = 0, negMult = 1;
  while (Math.abs(Math.PI - (pi * 4)) >= epsilon) {
    pi += negMult/(count * 2 + 1);
    count += 1;
    negMult *= -1;
  }
  return [count,  Math.round(pi * 4 * 10000000000) / 10000000000];
}
