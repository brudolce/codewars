const catchSignChange = arr => {
  let count = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if(arr[i-1]>=0 && arr[i]<0){
      count += 1;
    } else if (arr[i-1]<0 && arr[i]>=0) {
      count += 1;
    }
  }
  return count
}
