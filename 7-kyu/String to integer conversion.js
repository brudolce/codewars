function myParseInt(str) {
  return /^\s*\d+\s*$/.test(str) ? +str : NaN;
}
