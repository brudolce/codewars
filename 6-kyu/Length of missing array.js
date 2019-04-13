function getLengthOfMissingArray(arr) {
  if (arr === null) return 0;
  for (let i of arr) {
    if (i === null || i.length === 0) return 0;
  }
  arr = arr.sort((a, b)=> a.length - b.length);
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].length != arr[i-1].length + 1) return arr[i-1].length + 1;
  }
  return 0;
}
