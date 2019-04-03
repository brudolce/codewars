function isPangram(string){
  let str=string.split(' ').join('').replace(/[\W\d]/g,'').toLowerCase().split('')
  return [...new Set(str)].length==26
}
