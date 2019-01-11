var summation = function (num) {
  let count = 0
  while(num>0){
  count+=num;
  num-=1;
  }
  return count;
}