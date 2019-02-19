function colorOf(r,g,b){
  let gg=g.toString(16);
  let rr=r.toString(16);
  let bb=b.toString(16);
  
  if(gg.length<2) gg="0"+gg
  if(rr.length<2) rr="0"+rr
  if(bb.length<2) bb="0"+bb
  
  return "#"+rr+gg+bb
  
}
