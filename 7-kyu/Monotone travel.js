var isMonotone = function(arr){
  return arr.every((e, i) => !i || e >= arr[i-1])
}
