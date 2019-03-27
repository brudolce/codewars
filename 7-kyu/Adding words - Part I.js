class Arith {
  get dictionary() {
    return [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
    ]
  }

  constructor(num) {
    this.number = this.dictionary.indexOf(num)
  }

  add(num) {
    return this.dictionary[this.number + this.dictionary.indexOf(num)]
  }
}
