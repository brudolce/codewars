function topSecret(str) {
  let arr = str.split('');
  for (i = 0; i < arr.length; i+=1) {
    if (arr[i].charCodeAt()>122 || arr[i].charCodeAt()<65 ){
    } else if (arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'A' || arr[i] === 'B' || arr[i] === 'C'){
      arr[i]=String.fromCharCode(arr[i].charCodeAt()+23)
    } else {
      arr[i]=String.fromCharCode(arr[i].charCodeAt()-3)
    }
  }
  return arr.join('')
}
