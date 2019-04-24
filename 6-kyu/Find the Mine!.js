function mineLocation(field){
  let result = [];
  for (let i=0; i < field.length; i += 1) {
      if(field[i].includes(1)) {
        result.push(i);
        for(let j=0; j< field[i].length; j += 1) {
            if(field[i][j] === 1) result.push(j);
        }
      }
  }
  return result
}
