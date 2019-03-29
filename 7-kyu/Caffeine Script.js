function caffeineBuzz(n){
  let result = ''
  if (n%3===0 && n%4===0) {
    result += 'Coffee'
    if (n%2===0) result += 'Script'
  } else if (n%3===0) {
    result += 'Java'
    if (n%2===0) result += 'Script'
  }
  else result += 'mocha_missing!'
  return result
}
