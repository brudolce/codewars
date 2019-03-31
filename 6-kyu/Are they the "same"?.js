function comp(array1, array2){
  if (!array1 || !array2) return false
  return array1.sort((a,b)=>a-b).reduce((a,b)=>a+b,0)
  === array2.sort((a,b)=>a-b).reduce((a,b)=>a + Math.sqrt(b),0)
}
