snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    console.log('a' + result)
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
      console.log('b' + result)
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    console.log('c' + result)
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
      console.log('d' + result)
  }
  return result;
}
