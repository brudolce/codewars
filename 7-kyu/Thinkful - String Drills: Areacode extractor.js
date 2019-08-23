function areaCode(text) {
  return text.match(/\(([0-9]{3})\)/)[1];
}
