const findAll = (array, n) => {
  return array.reduce((acc,e,i)=> e===n ? acc.concat(i) : acc, [])
}
