function countSquares(n){
  return Array.from({length: n},(e,i)=>i+1).reduce((a,e)=>a + Math.pow(e,2),0)
}
