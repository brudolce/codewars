function decomp(n) {
  let obj = {}, result = [];
  for(let i = 2 ;i <= n;i += 1){
    let idx = i
    for(let x in obj)
      while(idx % x === 0){
        idx /= x;
        obj[x] += 1;
      }
    if(idx > 1 ) obj[idx] = 1;
  }
  for(let x in obj)
    (obj[x] === 1) ? result.push(x) : result.push( x + "^" + obj[x] );
  return result.join(" * ");
}
