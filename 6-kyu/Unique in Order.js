function uniqueInOrder(it) {
  let result = []
  let last
  
  for (let i of it) {
    if (i !== last) {
      result.push(last = i)
    }
  }
  
  return result
}
