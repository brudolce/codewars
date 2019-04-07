function getAverage(marks){
  return Math.floor(marks.reduce((a,e)=>a+e,0)/marks.length)
}
