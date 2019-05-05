function color(a) {
  if(a[0] == a[1]) return a[0];
  if((a == 'BG' || a == 'GB')) return 'R';
  if((a == 'RG' || a == 'GR')) return 'B';
  else return 'G';
}

function triangle(row) {
  let jesus = '';
  for (let i = 1; i < row.length; i++)
    jesus += color(row[i - 1] + row[i]);
  return (row.length == 1) ? row : triangle(jesus);
}

//atheist solution
function triangle(row) {
  const m = {BB: "B", BG: "R", BR: "G", GB: "R", GG: "G", GR: "B", RB: "G", RG: "B", RR: "R"};
  while (row.length > 1)
    row = [...row].reduce((a, v, i) => i ? a + m[[row[i - 1] + row[i]]] : a, '');
  return row;
}
