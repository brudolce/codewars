function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  let result = numbers.slice();
  for (let i=0; i < result.length; i += 1) {
    if (result[i] === min) {
      result.splice(i,1);
      break;
    }
  }
  return result
}
