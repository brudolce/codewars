function climb(n){
  let seq = [];
  while (n >= 1) {
    seq.push(n);
    n = Math.floor(n / 2);
  }
  return seq.reverse();
}
