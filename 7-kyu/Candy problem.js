function candies(kids){
  let max = Math.max(...kids)
  return kids.length < 2 ? -1 : kids.reduce((a,e)=>a + (max-e),0)
}
