//solution 1
const preFizz = n => Array.from({length: n}, (e, i) => i + 1)

//solution 2
function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}
