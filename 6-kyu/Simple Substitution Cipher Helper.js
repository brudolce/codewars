function SubstitutionCipher(abc1, abc2) {

  this.encode = function (str) {
    let encoded = '';
    for (let i = 0; i < str.length; i+=1) {
      if (!/[A-Za-z]/.test(str[i])) encoded += str[i];
       else for (let j = 0; j < abc1.length; j+=1) {
              if (str[i].toLowerCase() === abc1[j]) encoded += abc2[j];
            }
    }
    return encoded;
  }
  
  this.decode = function (str) {
    let decoded = '';
    for (let i = 0; i < str.length; i += 1) {
      if (!/[A-Za-z]/.test(str[i])) decoded += str[i];
      else for (let j = 0; j < abc2.length; j+=1) {
             if (str[i] === abc2[j]) decoded += abc1[j];
           }
    }
    return decoded;
  }
}
