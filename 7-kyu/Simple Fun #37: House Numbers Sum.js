function houseNumbersSum(inputArray) {
  let sum=0;
  
  for(let i=0;i<inputArray.length;i++){
    if(inputArray[i]==0) break;
    sum += inputArray[i];
  }
  return sum
}
