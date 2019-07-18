function getWinner(l) {
  let win = l.length/2
  let obj={};
  l.map(v=>obj[v]=obj[v]?obj[v]+1:1)
  for (let vote in obj){
  if (obj[vote]>win) return vote
  }
  return null 
}
