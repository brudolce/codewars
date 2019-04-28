function strCount(str, letter){  
  let obj = {}
  for (let i of str) {
    obj[i] = (obj[i]||0)+1
  }
  return obj[letter]||0
}
