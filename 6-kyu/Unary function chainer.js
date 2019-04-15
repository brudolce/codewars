function chained(functions) {
  return function(input) {
    for (let i = 0; i < functions.length; i++) {
        input = functions[i](input);
    }
    return input;
  }
}
