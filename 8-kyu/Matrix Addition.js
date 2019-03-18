function matrixAddition(a, b){
  const result = [];
  let temp = [];
  
  for (let i =0; i<a.length; i+=1) {
    for (let j=0; j<a[i].length; j+=1){
      let A = parseInt(a[i][j])
      let B = parseInt(b[i][j])
      temp.push(A+B)
    }
    result.push(temp);
    temp = [];
  }
  return result
}
