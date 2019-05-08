String.prototype.toBase64 = function() {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let encoded = '';
  
  for(let i=0; i < this.length; i+=3) {
    let c1 = this.charCodeAt(i), 
        c2 = this.charCodeAt(i+1), 
        c3 = this.charCodeAt(i+2);
    encoded += chars[(c1 & 0xFC) >> 2];
    encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
    encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
    encoded += chars[c3 & 0x3F];
  }
  
  return encoded;
};

String.prototype.fromBase64 = function() {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let decoded = '';
  
  for(let i=0; i < this.length; i+=4) {
    var c1 = chars.indexOf(this[i]), 
        c2 = chars.indexOf(this[i+1]), 
        c3 = chars.indexOf(this[i+2]),
        c4 = chars.indexOf(this[i+3]);
    decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
    decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
    decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  
  return decoded;
};





//first try, not working
(function () {
  var from64CharCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split('');
    var to64CharCode = from64CharCode.reduce(
    function (result, char, index) {
      result[char] = index;
      return result;
    }, {});

  function as64(chars) {
    var result = [];
    var codes = chars.map(function (c) { return c.charCodeAt(0); });
    var as24bit = (codes[0] << 16) +
          (codes[1] << 8) +
          (codes[2]);
    for(var j = 0; j < 4; j+=1) {
      var last6bits = as24bit & 0x3f;
      result[3 - j] = from64CharCode[last6bits];
      as24bit = as24bit >> 6;
    }
    return result;
  }

  function asASCII(chars) {
    var result = [];
    var codes = chars.map(function (c) { return to64CharCode[c]; });
    var as24bit = (codes[0] << 18) +
          (codes[1] << 12) +
          (codes[2] << 6) +
          (codes[3]);
    for(var j = 0; j < 3; ++j) {
      var last8bits = as24bit & 0xff;
      result[2 - j] = String.fromCharCode(last8bits);
      as24bit = as24bit >> 8;
    }
    return result;
  }

  String.prototype.toBase64 = function () {
    var padding = (3 - (this.length % 3)) % 3;
    var padded = this + "\u0000\u0000".slice(0, padding);
    var result = [];
    for(var i = 0; i < padded.length; i = i + 3) {
      result = result.concat(as64(padded.slice(i, i+3).split('')));
    }
    for(var j = 0; j < padding; ++j) {
      result.pop();
    }
    return result.join('');
  };
  
  String.prototype.fromBase64 = function () {
    var padded = this.replace(/=+$/, '');
    var padding = (4 - (padded.length % 4)) % 4;
    padded = padded + "AA".slice(0, padding);
    var result = [];
    for(var i = 0; i < padded.length; i = i + 4) {
      result = result.concat(asASCII(padded.slice(i, i+4).split('')));
    }
    for(var j = 0; j < padding; ++j) {
      result.pop();
    }
    return result.join('');
  };
})();
