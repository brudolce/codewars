const capitalizeFirstLetter = word =>
  `${word.substr(0, 1).toUpperCase()}${word.substr(1).toLowerCase()}`

function titleCase(title, minorWords = '') {
  const minorWordsArray = minorWords.toLowerCase().split(' ')
  const result = title
    .split(' ')
    .map((word, i) => {
      if (i === 0) return capitalizeFirstLetter(word)

      return minorWordsArray.includes(word.toLowerCase())
        ? word.toLowerCase()
        : capitalizeFirstLetter(word)
    })
    .join(' ')

  return result
}
