multiplicationTable = function(size) {
  let table = []
  let blueP = []
  for (let e = 1; e <= size; e += 1) blueP.push(e);
  for (let i = 1; i <= size; i += 1) table.push(blueP.map(x=>x*i));
  return table
}
