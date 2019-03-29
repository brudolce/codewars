function findSum(n) {
  let count=0
  for (let i = 0; i <= n; i += 1) {
    if(i%3===0 || i%5===0) count+=i;
  }  
  return count;
}
