function spinWords(s){
  const sA = s.split(' ')
  let result = []
  for (let i = 0; i < sA.length; i += 1) {
    if (sA[i].length > 4) {
      result[i] = sA[i].split('').reverse('').join('')
    } else {
      result[i] = sA[i]
    }
  }
  return result.join(' ')
}
