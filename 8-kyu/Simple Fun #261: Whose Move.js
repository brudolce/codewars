function whoseMove(lastPlayer, win) {
  if(lastPlayer==="black"&&win===false) return "white"
  if(lastPlayer==="white"&&win===true) return "white"
  return "black"
}
