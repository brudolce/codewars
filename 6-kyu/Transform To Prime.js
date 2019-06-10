function isPrime(n) {
  let sq = Math.sqrt(n);
  for(let i = 2; i <= sq; i += 1) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}

function minimumNumber(numbers){
  let sum= numbers.reduce((a,b)=>a+b,0)
  for (let i=0;;i++){
    if (isPrime(sum+i)) return i;
  }
}
