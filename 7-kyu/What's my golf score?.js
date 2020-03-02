function golfScoreCalculator(parList, scoreList){
  const par=parList.split('').reduce((a,b)=>a+(b*1),0)
  const score=scoreList.split('').reduce((a,b)=>a+(b*1),0)
  return score-par
}
