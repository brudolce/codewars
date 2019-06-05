function sequence(n, pattern) {
  return [...Array(n)].map(typeof pattern == 'function' ? pattern : () => pattern);
}
