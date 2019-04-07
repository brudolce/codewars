
function solution(string) {
  return string.split('').map(x=>{
    if (/[A-Z]/.test(x)) {
      return x = ' ' + x;
    } else {
      return x
    }
  }).join('')
}

// clever
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
