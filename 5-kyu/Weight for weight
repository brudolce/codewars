function orderWeight(strng) {
  return strng
    .split(' ')
    .map(num => {
      const weight = num.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
      return { num, weight }
    })
    .sort(
      (a, b) => a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
    )
    .map(({ num }) => num)
    .join(' ')
}
