function compoundArray(a, b) {
  let arr=[];
 for (let i=0;i<(a.length>b.length?a.length:b.length);i++){ arr.push(a[i])
  arr.push(b[i])}
  return arr.filter(v=>v!=undefined)
}
