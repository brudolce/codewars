
function solution(string) {
  return string.split('').map(x=>{
    if (/[A-Z]/.test(x)) {
      return x = ' ' + x;
    } else {
      return x
    }
  }).join('')
}
