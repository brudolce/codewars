function sumOfIntegersInString(s){
  return s.match(/[0-9]+/g)
  ? s.match(/[0-9]+/g).reduce((a,e)=>a+ +e,0) 
  : 0
}
