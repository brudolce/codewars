function getFirstPython(list) {
  let a=list.find(v=>v.language==='Python')
  return a?`${a.firstName}, ${a.country}`:'There will be no Python developers'  
}
