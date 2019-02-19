function streetFighterSelection(fighters, position, moves){
  let result = [];
  let cP = position;
  for (let move of moves){
    if (move === 'up'){
      if(cP[0] === 0){
        result.push(fighters[cP[0]][cP[1]]);
      } else{
        cP[0] -= 1;
        result.push(fighters[cP[0]][cP[1]]);
      }
    }
    if (move === 'down'){
      if(cP[0] === 1){
        result.push(fighters[cP[0]][cP[1]]);
      } else{
        cP[0] += 1;
        result.push(fighters[cP[0]][cP[1]]);
      }
    }
    if (move === 'left'){
      if(cP[1] === 0){
        cP[1] = 5;
        result.push(fighters[cP[0]][cP[1]]);
      } else{
        cP[1] -= 1;
        result.push(fighters[cP[0]][cP[1]]);
      }
    }
    if (move === 'right'){
      if(cP[1] === 5){
        cP[1] = 0;
        result.push(fighters[cP[0]][cP[1]]);
      } else{
        cP[1] += 1;
        result.push(fighters[cP[0]][cP[1]]);
      }
    }
  }
  
  return result;
}
