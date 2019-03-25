function stairsIn20(s){
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    result += s[i].reduce((acc,e)=>acc+e,0)
  }
  return result * 20
}

//clever soluiton
function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
