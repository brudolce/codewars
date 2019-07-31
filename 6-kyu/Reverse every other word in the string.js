function reverse(str){
  return str==='   '?'':str.split(' ').map((v,i)=>i%2===1?v.split('').reverse().join(''):v).join(' ')
}
