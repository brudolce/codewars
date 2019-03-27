function duplicateEncode(word){
  const Obj = {};
  //creating hash
  word.toLowerCase().split('').forEach( letter => {
    Obj[letter] = (Obj[letter]||0) +1
  });
  
  //comparing hash to input
  word = word.toLowerCase().split('').map( letter => {
    if(Obj[letter] > 1) {
      return ')';
    } else {
      return '(';
    }}).join('');
  return word;
}
