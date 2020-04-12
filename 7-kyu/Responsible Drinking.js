function hydrate(s) {
  let st = s.match(/[0-9]/gi).reduce((a,e)=> a + Number(e),0)
  return st>1 ?`${st} glasses of water`: `${st} glass of water`
}
