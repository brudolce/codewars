function foldArray(a, n) {
  const result = [], c = a.slice();
  while (c.length) result.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(result, n - 1) : result;
}
