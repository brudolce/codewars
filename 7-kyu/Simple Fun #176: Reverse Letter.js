function reverseLetter(str) {
  const arr = str.split('').reverse()
  const result = []
  for (let i of arr){
    if (/[a-z]/.test(i)) result.push(i)
  }
  return result.join('')
}
