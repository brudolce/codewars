function count(array){
  let obj = {}
  for(let name of array) {
    obj[name] = (obj[name]||0) + 1; 
  }
  return obj
}
