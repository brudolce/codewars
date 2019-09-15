function sumCubes(n){
  return Array.from({length:n}, (e,i)=>i+1)
        .reduce((acc,e)=>acc+e**3,0)
}
