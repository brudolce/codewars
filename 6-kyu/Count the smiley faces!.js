function countSmileys(arr) {
  return arr.filter(e=> /(\:|\;)(\~|\-)?(\)|[D])/.test(e)).length
}
