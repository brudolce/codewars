var createIterator = function (func, n) {
  function f(x) {
    let y = x;
    for (let i = 0; i < n; i += 1) y = func(y);
    return y;
  }
  return f;
};
