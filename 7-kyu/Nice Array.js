function isNice(arr){
  return arr.length>0 && arr.every((e,i,a)=> a.includes(e+1)|| a.includes(e-1))
}
