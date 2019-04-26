function isTriangleNumber(n) {
  let t = 0, i = 0;
  while (t < n){
    i+=1;
    t+=i;
  }
  return t === n
}
