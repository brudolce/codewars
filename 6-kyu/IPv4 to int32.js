function ipToInt32(ip){
  var a = ip.split('.').map(function(item) {
    return Number(item);
  });

  var sum = ((a[0] << 24) >>> 0) + (a[1] << 16) + (a[2] << 8) + a[3];
  return sum;
}

//clever solution
function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
}
