function largestSum(arr){
  let max = 0;
  let sum = 0;
  
  node: for(let i = 0; i < arr.length; i += 1) {
    if((sum+arr[i])<0) {
      sum = 0;
      continue node;
    }
    sum += arr[i]
    max = (sum>max) ? sum : max;
  }
  return max;
}
