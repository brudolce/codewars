find_the_ball=function(start,swaps){
  let ball = start
  for (let i=0; i< swaps.length; i += 1) {
    if(swaps[i].indexOf(ball) !== -1) {
      ball =  swaps[i][(swaps[i].indexOf(ball)+1)%2]
    }
  }
  return ball
}
