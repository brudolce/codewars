const polishDictionary = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
}
const correctPolishLetters = string =>
  string.replace(/[ąćęłńóśźż]/gi, char => polishDictionary[char] || char)
