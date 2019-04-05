var orderedCount = function (text) {
  let obj = {}, result = [];
  for (let a of text) {
    obj[a] = (obj[a]||0) + 1
  }
  for (let i of new Set(text)) {
    result.push([i, obj[i]]);
  }
  return result
}
