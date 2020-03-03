function sumOfMinimums(arr) {
  return arr.map(v=>Math.min(...v)).reduce((a,b)=>a+b,0)
}
