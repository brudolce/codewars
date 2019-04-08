function presses(phrase) {
  var phrase = phrase.toUpperCase();
  var result = 0;
  for (i = 0; i < phrase.length; i++) {
    if (phrase[i] == "7" || phrase[i] == "9") {
      result += 5;
    } else if (phrase[i] == "S" || phrase[i] == "Z" || phrase[i] == "2" || phrase[i] == "3" || phrase[i] == "4" || phrase[i] == "5" || phrase[i] == "6" || phrase[i] == "8") {
      result += 4;
    } else if (phrase[i] === "C" || phrase[i] === "F" || phrase[i] === "I" || phrase[i] === "L" || phrase[i] === "O" || phrase[i] === "R" || phrase[i] === "V" || phrase[i] === "Y") {
      result += 3;
    } else if (phrase[i] === "B" || phrase[i] === "E" || phrase[i] === "H" || phrase[i] === "K" || phrase[i] === "N" || phrase[i] === "Q" || phrase[i] === "U" || phrase[i] === "X" || phrase[i] === "0") {
      result += 2;
    } else {
      result += 1;
    }
  }
  return result;
}
