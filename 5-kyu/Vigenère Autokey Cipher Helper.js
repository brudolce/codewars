//best practice solution
function VigenèreAutokeyCipher(origKey, abc) {
  this.encode = function(str) {
    var ignore = 0, key = origKey;
    return str.split('').map(function(v, i) {
      if(abc.indexOf(v) == -1) {ignore++; return v;}
      key = key.concat(v);
      return abc[(abc.indexOf(v) + abc.indexOf(key[i - ignore])) % abc.length];
    }).join('');
  };
  this.decode = function(str) {
    var ignore = 0, key = origKey;
    return str.split('').map(function(v, i) {
      if(abc.indexOf(v) == -1) {ignore++; return v;}
      var ind = abc.indexOf(v) - abc.indexOf(key[i - ignore]),
          out = abc[ind < 0 ? ind + abc.length : ind]
      key = key.concat(out);
      return out;
    }).join('');
  };
}

//coding coding coding
function VigenèreAutokeyCipher(key, abc) {
  this.encode = function (str) {
    let res = '', i = 0;    
    str.split("").forEach(function(letter) {
      if (abc.indexOf(letter) === -1)
        res += letter;
      else
      {
        let shift = i < key.length ? key[i] : str[i - key.length];
        while (abc.indexOf(shift) === -1)
        {
          i ++;
          shift = i < key.length ? key[i] : str[i - key.length];
        }
        res += abc[(abc.indexOf(letter) + abc.indexOf(shift)) % abc.length];
        i ++;
      }
    });
    return res;
  };
  
  this.decode = function (str) {
    let res = '', i = 0;    
    str.split("").forEach(function(letter, index) {
      if (abc.indexOf(letter) === -1)
        res += letter;
      else
      {
        var shift = i < key.length ? key[i] : res[i - key.length];
        while (abc.indexOf(shift) === -1)
        {
          i ++;
          shift = i < key.length ? key[i] : res[i - key.length];
        }
        res += abc[(abc.indexOf(letter) + abc.length - abc.indexOf(shift)) % abc.length];
        i ++;
      }
    });
    return res;
  };
}
