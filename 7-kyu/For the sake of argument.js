function numbers() {
  return [...arguments].every(x=> typeof x === 'number')
}
