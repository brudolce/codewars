function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  let words = this.words;
  let wordsArr = [];
  let patternArr = pattern.split('');
  let arr = [];

  for (i = 0; i < words.length; i++) {
    wordsArr.push(words[i].split(''));
  }
  for (j = 0; j < wordsArr.length; j++) {
    for (k = patternArr.length-1; k >= 0; k--) {
      if (patternArr.length === wordsArr[j].length && patternArr[k] === '?') {
        wordsArr[j].splice(k,1,'?');
      }
    }
  }
  for (l = 0; l < wordsArr.length; l++) {
    if (wordsArr[l].join('') === pattern) {
      arr.push(words[l]);
    }
  }
  
  return arr;
};
