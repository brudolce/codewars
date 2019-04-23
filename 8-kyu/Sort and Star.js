function twoSort(s) {
  return s.sort((a,b)=>a.charCodeAt()-b.charCodeAt())[0].split('').join('***')
}
