function pattern(n) {
  var res = [], i;
  for(i = 1; i <= n; i++) {
  if (i%2!==0){
    res.push(Array(i + 1).join(i));
  }}
  return res.join('\n');
}
