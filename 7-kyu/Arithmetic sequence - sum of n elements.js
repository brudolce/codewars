function ArithmeticSequenceSum(a, r, n) {
 let arr=[];
 for (let i=0;i<n;i++)
 arr.push(a+r*i)
  return arr.reduce((a,b)=>a+b,0)
}
