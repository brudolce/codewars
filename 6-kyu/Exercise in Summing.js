function minimumSum(values, n) {
  return values.sort((a,b)=>a-b).slice(0,n).reduce((a,e)=>a+e,0) 
}

function maximumSum(values, n) {
  return values.sort((a,b)=>b-a).slice(0,n).reduce((a,e)=>a+e,0)
}
