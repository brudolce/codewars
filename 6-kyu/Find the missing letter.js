function findMissingLetter(array) {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const beginAt = alph.findIndex(char => char === array[0].toLowerCase())

  const subset = alph.slice(beginAt, beginAt + array.length)

  if (array[0] === array[0].toUpperCase()) {
    return subset
      .filter(char => !array.includes(char.toUpperCase()))
      .join('')
      .toUpperCase()
  }

  return subset.filter(char => !array.includes(char)).join('')
}
