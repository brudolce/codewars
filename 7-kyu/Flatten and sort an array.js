function flattenAndSort(array) {
  return array.reduce((a,b)=>[...a, ...b],[]).sort((a,b)=>a-b)
}
