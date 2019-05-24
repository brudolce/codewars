multiplicationTable = function(size) {
  let table = []
  let blueP = []
  for (let e = 1; e <= size; e += 1) blueP.push(e);
  for (let i = 1; i <= size; i += 1) table.push(blueP.map(x=>x*i));
  return table
}

//smartass solution
multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}
