function generateShape(int){
  let sum=""
  let sqr=""
  let i=0
  let j=0
  while(j<int){
    while(i<int){
      sum+="+";
      i+=1;
    }
    if(j<int-1){
    sqr+=sum+'\n';
    j+=1;
    } else {
    sqr+=sum;
    j+=1}
  }
  return sqr 
}

// solution2
function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}
