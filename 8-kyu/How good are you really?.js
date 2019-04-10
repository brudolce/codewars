function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((a,e)=>a+e,0)+yourPoints)/(classPoints.length+1) < yourPoints
}
