var minDot = function(a,b){  
  if (a.length===0 || b.length===0) return 0
  a.sort((a,b)=>a-b);
  b.sort((a,b)=>b-a);
  return a.reduce((acc,e,i)=>acc + (e * b[i]) ,0)
}
