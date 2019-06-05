function F(n) {
  return n===0 ? 1 : n - M(F(n-1))
}

function M(n) {
  return n===0 ? 0 : n - F(M(n-1))
}
