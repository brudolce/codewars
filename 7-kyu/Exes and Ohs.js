function XO(str) {
 if (str === '') return true
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  if (!o || !x) return false
  return x.length === o.length
}
