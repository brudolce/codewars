//regular dude solution
function powerOf4(n) {
    if (n < 4) return false;
    while (n >= 4) n /= 4;
    return n === 1;  
}

//smart ass math solution
function powerOf4(n) {
  return n > 1 && typeof n === 'number' 
    ? Number.isInteger(Math.log(n)/Math.log(4))
    : false
}
