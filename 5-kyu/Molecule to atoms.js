function parseMolecule(formula) {
  var stack = [];
  var multiplier = 1;
  var output = {};
  var elementMultiplier = false;

  formula = formula.match(/([A-Z][a-z]?)|(\d+)|([\[\]\(\)\{\}])/g);

  formula.reverse().forEach(function (element) {
    if(/\d+/.test(element)) {
      multiplier *= parseInt(element);
      stack.push(parseInt(element));
      elementMultiplier = true;
    } else if (/[\]\)\}]/.test(element)) {
      elementMultiplier = false;
    } else if (/[\[\(\{}]/.test(element)) {
      var remove = stack.pop();
      multiplier /= remove;
    } else if (/[A-Z][a-z]?/.test(element)) {
      if(!output[element]) { output[element] = 0; }

      output[element] += multiplier;

      if(elementMultiplier) {
        var remove = stack.pop();
        multiplier /= remove;
        elementMultiplier = false;
      }
    }
  });

  return output;
}

//clever solution
function parseMolecule(formula) {
  var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
  while (tokens = tokenExp.exec(formula)) {
    tokens[2] = tokens[2] || 1;
    if (/^[A-Z]/.test(tokens[1])) {
      while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
    } else if (/[{\(\[]/.test(tokens[1])) {
      stack.push([]);
    } else {
      group = stack.pop();
      while (tokens[2]--) stack.push(stack.pop().concat(group))
    }
  }
  return stack[0].reduce(function (count, x) {
    count[x] = (count[x] || 0) + 1;
    return count;
  }, {});
}
