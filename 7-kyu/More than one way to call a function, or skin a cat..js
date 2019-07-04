function sum (a,b){
  if (arguments.length === 1)
    return function(b) { return a + b; };
  return a+b;
}
