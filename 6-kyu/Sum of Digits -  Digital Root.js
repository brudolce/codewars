function digital_root(n) {
  while (n > 10){
    n = String(n).split('').reduce((acc,e) => acc + Number(e), 0)
  }
  return n
}


//clever solution
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
