function onlyDuplicates(str) {
  return str.split('').filter(x=>str.indexOf(x)!==str.lastIndexOf(x)).join('')
}
