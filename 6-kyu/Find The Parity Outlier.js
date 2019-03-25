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

// clever solution
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
