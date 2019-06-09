function doubles(maxk, maxn) {
    let fn = (a,b) => 1/(k * Math.pow((n + 1), 2*k)), k = 1, s = 0;
    while(k <= maxk) {
      for(var n = 1; n <= maxn; n++) 
        s += fn(k,n);
      k++;
    }
    return s;
}

//clever solution
function doubles(maxk, maxn) {
  var s = 0;
  for (var k = 1; k <= maxk; ++k)
  for (var n = 1; n <= maxn; ++n) s += v(k, n);
  return s;
}

function v(k, n) {
  return 1/(k * Math.pow((n + 1), 2*k));
}
