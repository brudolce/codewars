function splitAndMerge(str,sp){
  return str.split("").join(sp).split(sp + " " + sp).join(" ")
}
