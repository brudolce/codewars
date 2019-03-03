function findOdd(A) {
 const obj={}
 let result;
 
  for (let i=0;i<A.length;i+=1){
    obj[A[i]] = (obj[A[i]] || 0) + 1;
  }
  
  for (key in obj) {
    if (obj[key]%2!==0) {
      result = key
    }
  }
 
  return Number(result)
}
