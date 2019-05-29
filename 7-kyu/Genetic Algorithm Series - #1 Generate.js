const generate = (length) => {
  let res = ''
  for (let i = 0; i < length; i++) {
    res += Math.round(Math.random())
  }
  
  return res
}
