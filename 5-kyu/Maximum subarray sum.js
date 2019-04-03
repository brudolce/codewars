var maxSequence = function(arr){ 
  let min = 0, max = 0, i, sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    min = Math.min(sum, min);
    max = Math.max(max, sum - min)
  }
  return max
}
