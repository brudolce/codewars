function calc(expr) {  
  var result = [];
  var pile = expr.split(/\s+/);
  var operators = ['+', '-', '*', '/'];
  for (var i=0; i<pile.length; i += 1) {
    switch(pile[i]) {
      case '+': result.push(result.pop() + result.pop()); break;
      case '-': result.push(-result.pop() + result.pop()); break;
      case '*': result.push(result.pop() * result.pop()); break;
      case '/': result.push(1 /(result.pop() / result.pop())); break;
      default: result.push(parseFloat(pile[i]));
    }
  }
  return result.pop() || 0;
}
