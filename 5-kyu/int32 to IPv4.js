function int32ToIp(int32){
  var str = int32.toString(2)
    , a = [];

  while (str.length < 32) str = '0' + str;
  
  while (str) {
    var tmp = str.substring(0, 8);
    a.push(parseInt(tmp, 2));
    str = str.substring(8);
  }

  return a[0] + '.' + a[1] + '.' + a[2] + '.' + a[3];
}

//clever stuff
function int32ToIp(int32){
 return (
          ((int32 >> 24) & 0xFF) + "." +
          ((int32 >> 16) & 0xFF) + "." +
          ((int32 >>  8) & 0xFF) + "." +
          ((int32) & 0xFF)
        );
}

//clever stuff 2
function int32ToIp(int32) {
  var bin = int32.toString(2);
  bin = Array(33 - bin.length).join('0') + bin;
  return [0,0,0,0].map(function(v, i) {return parseInt(bin.slice(i * 8, i * 8 + 8), 2);}).join('.');
}
