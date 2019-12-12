function pyramid(n) {
  return Array.from({length:n},(x,i)=>Array(i+1).fill(1))
}

//solution2
function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}
