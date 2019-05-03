function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

//solution 2
function swapValues() {
  return arguments[0].reverse();
}

//solution 3
function swapValues(arr) {
  return arr.reverse()
}
