function DNAStrand(dna){
  let result = ''
  for (let i=0; i < dna.length; i +=1 ) {
    switch (dna[i]) {
      case 'T':
        result += 'A'
        break;
      case 'A':
        result += 'T'
        break;
      case 'C':
        result += 'G'
        break;
      case 'G':
        result += 'C'
        break;
    }
  }
  return result
}
