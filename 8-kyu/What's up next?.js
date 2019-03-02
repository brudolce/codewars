const nextItem = (xs, item) => {
  let found = false
  let result

  for (let i of xs) {
    if (found) {
      result = i
      break
    }
    if (i === item) found = true
  }
  
  return result
}
