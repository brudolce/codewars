var gimme = function (inputArray) {
  let sorted = inputArray.slice().sort((a, b) => a - b);
  return inputArray.indexOf(sorted[1]);
};
