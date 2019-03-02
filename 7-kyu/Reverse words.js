function reverseWords(str) {
  return str.split(' ').map( x => x.split('').reverse().join('')).join(' ')
}
