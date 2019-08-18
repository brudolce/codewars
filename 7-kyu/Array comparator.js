function matchArrays(v,r){
  let count = 0;
  v.forEach((e)=>r.includes(e)?count++:0)
  return count
}
