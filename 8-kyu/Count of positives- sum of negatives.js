function countPositivesSumNegatives(input) {
  if (input === null|| input.length === 0) return [];
  let count = 0, sum = 0;
  for (let i of input){
    if (i>0) count += 1;
    if (i<0) sum += i;
  }
  return [count, sum];
}
