const firstNonRepeatingLetter = s => {
  const index = s
    .toLowerCase()
    .split('')
    .findIndex((e, i, s) => s.indexOf(e) === s.lastIndexOf(e))
  return index === -1 ? '' : s[index]
}
