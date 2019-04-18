function numbers() {
  return [...arguments].every(x=> typeof x === 'number')
}

//clever stuff
const numbers = (...arr) => arr.every(x => typeof x === 'number')
