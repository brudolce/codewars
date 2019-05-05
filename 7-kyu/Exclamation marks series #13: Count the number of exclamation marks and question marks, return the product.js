//clever solution
function product(s){
  excs = s.split('!').length - 1
  ques = s.split('?').length - 1
  return excs * ques
}

//RegEx solution
function product(s){
  return (s.match(/\?/g)||[]).length*(s.match(/!/g)||[]).length
}
