function generateHashtag(str) {
  if (str.trim() === '') return false

  const stringWithCamelCase = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`

  return stringWithHashtag.length > 140 ? false : stringWithHashtag
}
