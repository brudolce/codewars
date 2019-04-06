function collatz(n){
  const result = [];
  while (n !== 1) {
    if (n%2===0){
      result.push(n=n/2);
    } else {
      result.push(n=n*3+1)
    }
  }
  return result.length+1
}
