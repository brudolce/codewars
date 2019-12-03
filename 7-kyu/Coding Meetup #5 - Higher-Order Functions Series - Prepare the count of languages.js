function countLanguages(list) {
  const res = {}
  for(let i=0; i< list.length; i++){
    res[list[i].language] = (res[list[i].language]||0)+1
  }
  return res
}
