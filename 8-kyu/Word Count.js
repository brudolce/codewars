function countWords(str) {
  return str.split(/\s/g).filter(Boolean).length
}
