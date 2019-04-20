function scoreThrows(r){
  if (r.length===0) return 0
  return r.every(a=>a<5) ? (r.length*10)+100 : r.reduce((a,b)=>a + (b<5?10:b<=10?5:0),0) 
}
