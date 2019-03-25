function findOutlier(integers){
  let length = integers.length;
  let evens = [];
  let odds = [];
  
  for (let i=0; i<length; i += 1) {
    if (integers[i] % 2 == 0) {
      evens.push(integers[i]);
    }
    if (Math.abs(integers[i] % 2) == 1) {
      odds.push(integers[i]);
    }
  }
  if (evens.length > odds.length) return odds[0];
  else return evens[0];
}
