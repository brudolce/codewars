function decodeResistorColors(bands) {
  var code = {black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9};
  bands = bands.split(' ');
  
  var r = (10 * code[bands[0]]) + code[bands[1]];
      r *= Math.pow(10,code[bands[2]]);
  var t = !bands[3] ? '20%' : bands[3]==='gold' ? '5%' : '10%';
  
  if(r < 1000) r = ''+r;
  else if(r < 1000000) r = (r/1000)+'k';
  else r = (r/1000000) + 'M';
  
  return r + ' ohms, ' + t;
}
