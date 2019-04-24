function pluck(objs, name) {
  const result = [];
  for (let i of objs) {
    result.push(i[name])
  }
  return result
}

//clever solution
function pluck(objs, name) {
  return objs.map(obj=> obj[name]);
}
