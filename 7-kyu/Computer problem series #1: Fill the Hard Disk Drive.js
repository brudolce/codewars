function save(sizes, hd) {
  let i;
  for (i=0;i<sizes.length;i++){
    if (sizes.slice(0,1+i).reduce((a,b)=>a+b,0)>hd) return i
  }
  return i
}
