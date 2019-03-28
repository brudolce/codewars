function inAscOrder(arr) {
  return arr.join('') === arr.slice().sort((a,b)=>a-b).join('')
}
