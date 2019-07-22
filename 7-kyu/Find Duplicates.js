function duplicates(arr) {
  return [...new Set(arr.filter((v,i,arr)=>arr.indexOf(v)!==arr.lastIndexOf(v)))]
}
