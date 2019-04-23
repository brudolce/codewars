function lostSheep(friday,saturday,total){
  return total-(friday.reduce((acc,next)=>acc+next,0))-(saturday.reduce((acc,next)=>acc+next,0))
}

//clever solution
function lostSheep(friday,saturday,total){
  return friday.concat(saturday).reduce((s,l)=>s-l,total)
}
