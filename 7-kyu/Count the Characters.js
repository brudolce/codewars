function countChar(string, char) {
  return (string.match(new RegExp(char, 'ig')) || []).length 
}
