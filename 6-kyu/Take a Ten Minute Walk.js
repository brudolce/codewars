function isValidWalk(walk) {
  let len = walk.length
  if (len > 10 || len % 2 !== 0 || len < 4) return false
  
  let r=0
  for (let i = 0; i < walk.length; i += 1) {
    if (walk[i]==='n') {
      r += 1
    }
    if (walk[i]==='s') {
      r -= 1
    }
    if (walk[i]==='w') {
      r += 10
    }
    if (walk[i]==='e') {
      r -= 10
    }
  }
  
  return r === 0
}
