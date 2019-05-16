function wordsToMarks(string){
  return [...string].reduce((res, c) => res += c.charCodeAt() - 96, 0)
}
