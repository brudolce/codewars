const gcd = (a, b) => {
  if(b == 0) return a;
  return gcd(b, a % b);
}

var nbrOfLaps = function (x, y) {
  var lcm = (x*y)/ gcd(x,y);
  return [lcm/x, lcm/y];
}
