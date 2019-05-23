function makeSentence(parts) {
  return parts.filter(x=>x!=='.').join(' ').replace(/\s\,\s/g,', ') + '.'
}
