function swap(str){
  let out = ''
  for(let l of str){
    if (l === l.toUpperCase()) out += l.toLowerCase(); 
    else out += l.toUpperCase()
  }
  return out
}
