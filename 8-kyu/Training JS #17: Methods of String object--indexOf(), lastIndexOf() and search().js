function firstToLast(str,c){
 let a = str.indexOf(c)
 let b = str.lastIndexOf(c)
 return a===-1 ? -1 : b-a
  
}
