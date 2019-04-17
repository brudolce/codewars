function mostFrequentItemCount(collection) {
  if (collection.length===0) return 0
  let obj ={}
  for (let e of collection){
    obj[e] = (obj[e]||0) + 1
  }
  return Math.max(...Object.values(obj))
}
