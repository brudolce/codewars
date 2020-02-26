var solution = function(firstArray, secondArray) {

  let absSqrDiff = firstArray.reduce(function(sum, currentVal, index) {
    return sum += (Math.pow((currentVal-secondArray[index]),2));  
  }, 0);
  
  return absSqrDiff/(firstArray.length);
 
}
