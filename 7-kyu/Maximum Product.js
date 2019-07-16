function adjacentElementsProduct(a) {
  return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
}
