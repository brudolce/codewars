const longestWord = stringOfWords =>
  stringOfWords.split(' ').reduceRight((a0, a) => (a.length > a0.length ? a : a0))
