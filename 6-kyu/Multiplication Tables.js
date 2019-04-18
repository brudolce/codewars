function multiplicationTable(row, col) {
  let table = []
  for (let i = 1; i <= row; i++) {
    let inner = [i]
    for (let j = 2; j <= col; j++) {
      inner.push(j*i)
    }
    table.push(inner)
  }
  return table
}

//clever solution 1
const multiplicationTable = (row, col) => Array(...Array(row)).map((_, i) => Array(...Array(col)).map((_, j) => (i + 1) * (j + 1)));


//clever solution 2
function multiplicationTable(row,col){
  var r = Array.apply(null, Array(col));
  return Array.apply(null, Array(row)).map((_,i) =>
    r.map((_,j) => (i+1)*(j+1))
  );
}
