const Xbonacci = (sig, n) => {
  let len = sig.length;
  for (let i = len; i < n; i++) {
    sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
  }
  return sig.slice(0, n);
}
