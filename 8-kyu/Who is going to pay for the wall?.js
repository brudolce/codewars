function whoIsPaying(name){
  if (name.length <= 2) return [name];
  return [name, name.slice(0,2)]
}
