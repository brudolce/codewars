function oddRow(n) {
  let arr = [n * n - n + 1];
  for(let i = 1; i < n; i++)
    arr.push( arr[arr.length-1] + 2 );
  return arr;
}
