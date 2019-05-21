function getNumberFromString(s) {
  return +s.match(/\d/g).join('');
}
