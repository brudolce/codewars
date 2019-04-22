//douche recursion to the same simple issue
function twiceAsOld(d, s, d2=d, s2=s, counter=0) {  
  return d/2===s||d2/2===s2 ? counter : twiceAsOld(d-=1, s-=1, d2+=1, s2+=1, counter+=1)
}

//regular solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
