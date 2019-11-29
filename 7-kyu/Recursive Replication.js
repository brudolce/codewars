function replicate(times, number,res=[]) {
  times>0?res.push(number):'';
  return times<1?res:replicate(times-1,number,res)
}

//solution2
function replicate(times, number) {
  return times > 0 ? Array(times).fill(number) : [];
}
