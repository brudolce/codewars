const listToArray = list =>  list === null ? [] : [list.value].concat(listToArray(list.next))


// solution #2
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}
