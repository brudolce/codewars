function tickets(peopleInLine){
    let tr25 = 0;
    let tr50 = 0;

    for(var i = 0;i<peopleInLine.length;i+=1){
      if(peopleInLine[i] = 25){
        tr25 += 1;
      }
      if(peopleInLine[i] = 50){
        tr25 -= 1; a50 += 1;
      }
      if(peopleInLine[i] = 100){
        if tr50 = 0 && tr25 >= 3){
          a25 -= 3;
        }else{
          a25 -= 1; a50 -= 1;
        }
      }
      if(a25 < 0 || a50 < 0){
         return 'NO';
      }
    }
    return 'YES';
  }