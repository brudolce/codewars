function nbDig(n, d) {
  let counter=0;
  for (let g = 0; g <= n; g += 1){
    let arr=(g * g + "").split("");
    arr.forEach( (s) => s == d ? counter += 1 : null)
    }
  return counter;
}
