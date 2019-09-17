function numPrimorial(n){
  let arr = [];
  for (let i=1;;i++){
    if (n===arr.length){break}
    if (isPrime(i)) arr.push(i)
  }
  return arr.reduce((a,b)=>a*b,1)
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
