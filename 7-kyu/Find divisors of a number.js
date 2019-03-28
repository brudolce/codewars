function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1;i <= n; i += 1) {
    if (n%i===0) count += 1
  }
  return count
}
