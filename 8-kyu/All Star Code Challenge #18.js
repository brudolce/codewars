function strCount(str, letter){  
  let obj = {}
  for (let i of str) {
    obj[i] = (obj[i]||0)+1
  }
  return obj[letter]||0
}


//one line solution
const strCount = (str, letter) =>  str.split(letter).length-1
