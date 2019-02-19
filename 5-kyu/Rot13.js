const rot13 = message => {
  const englishAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const rot13Alphabet = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'

  return message.replace(
    /[a-z]/gi,
    char => rot13Alphabet[englishAlphabet.indexOf(char)]
  )
}
