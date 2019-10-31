function solveExpression(exp) {
  var splitExp = ''
  for(let i = 0; i < 10; i++){
    splitExp = exp.replace(/\?/g,i.toString()).replace(/\-\-/, "+").split("=");
    if (parseInt(splitExp[1]) === eval(splitExp[0]) && !exp.includes(i) && !splitExp[1].match(/^0{2,}/)) return i;
  }
  return -1;
}
