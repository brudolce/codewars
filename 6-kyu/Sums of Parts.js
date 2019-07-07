function partsSums(ls) {
  let arr = [0];
  ls.reverse().forEach(v => arr.push(arr[arr.length-1] + v));
  return arr.reverse();
}
