//took me almost 45 minutes to come out with this
function notVisibleCubes(n) {
  return n>3 ? (n-2) * (n-2) * (n-2) : n==3 ? 1 : 0
}

//some math genious worte this
const notVisibleCubes = n => Math.pow(Math.max(n - 2, 0), 3);
