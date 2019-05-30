function flipNumber(n) {
  let res = '', arr = n.split('')
  for (let i = 1; i <= n.length; i+= 1) {
    arr.reverse();
    res += arr[0];
    arr.shift();
  }
  return res;
}
