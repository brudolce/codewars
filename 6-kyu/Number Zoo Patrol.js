function findNumber(array) {
  let total = Array.from({length:array.length+1},(x,i)=>i+1).reduce((a,b)=>a+b,0)
  return total - array.reduce((a,b)=>a+b,0)
}
