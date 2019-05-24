var Converter = {
  toAscii: function (hex) {
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    } 
    return str
  },
  toHex: function (ascii) {
    let arr1 = [];
	  for (var n = 0, l = ascii.length; n < l; n += 1) {
		  let hex = Number(ascii.charCodeAt(n)).toString(16);
		  arr1.push(hex);
	 }
	  return arr1.join('');
  }
}


//clever solution
function Converter(){}
Converter.toAscii = function(hex){
  return hex.replace(/../g, function(h) {
    return String.fromCharCode(parseInt(h,16));
  });
};
Converter.toHex = function(ascii){
  return ascii.replace(/./g, function(a) {
    return a.charCodeAt().toString(16);
  });
};
