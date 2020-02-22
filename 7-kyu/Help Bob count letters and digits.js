function countLettersAndDigits(input) {
  return input.split``.filter(v=>/[0-9a-zA-Z]/.test(v)).length
}
