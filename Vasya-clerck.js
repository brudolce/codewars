
function tickets(peopleInLine){
  let p25 = 0;
  let p50 = 0;
  for(let i=0;i<peopleInLine.length;i+=1){
    if(peopleInLine[i]==25){
      p25+=1;
    }
    if(peopleInLine[i]==50){
      p25-=1;
      p50+=1;
    }
    if(peopleInLine[i]==100){
      if(p50==0 && p25>=3){
        p25-=3;
      }
      else {
        p25 -=1; p50-=1;
      }
    }
    if(p25<0 || p50<0){
    return "NO";
    }
  }
  return "YES";
}