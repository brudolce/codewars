var vampire_test = function(a, b){
  var c = (a * b).toString();
  var d = a + '' + b;

  var e = c.split('').sort().toString();
  var f = d.split('').sort().toString();
  
  return e == f;
}
