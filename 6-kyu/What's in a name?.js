function nameInStr(str, name){
  let nameregex = new RegExp(".*" + name.split("").join(".*") + ".*", 'i');
  return nameregex.test(str)
}
