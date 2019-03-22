function sumTwoSmallestNumbers(numbers) {  
  let Numbers = numbers.sort( (a,b) => a-b)
  return Numbers[0] + Numbers[1]
};
