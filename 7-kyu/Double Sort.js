function dbSort(a) {
  let word = a.filter(v => typeof v == "string").sort();
  let number = a.filter(v => typeof v == "number").sort((a, b) => a - b);
  return number.concat(word);
}
