function scale(strng, k, n) {
  const arr=strng.split('\n').map(v=>v.split('').map(v=>(v).repeat(k)).join(''))
  .map(v=>(v+' ').repeat(n)).map(v=>v.trim().replace(/ /g,'\n')).join('\n')
  return arr
}
