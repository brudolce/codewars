function notVisibleCubes(n) {
  return n>3 ? (n-2) * (n-2) * (n-2) : n==3 ? 1 : 0
}
