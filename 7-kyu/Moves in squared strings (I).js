const reverseString = (str, splitBy) =>
  str
    .split(splitBy)
    .reverse()
    .join(splitBy)

const vertMirror = string =>
  string
    .split('\n')
    .map(str => reverseString(str, ''))
    .join('\n')

const horMirror = string => reverseString(string, '\n')

const oper = (fct, s) => fct(s)
