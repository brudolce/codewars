const iqTest = numbers => {
  const numArray = numbers.split(' ').map(num => Number(num))
  const even = numArray.filter(num => num % 2 === 0)
  const odd = numArray.filter(num => num % 2 !== 0)

  return odd.length < even.length
    ? numArray.indexOf(odd[0]) + 1
    : numArray.indexOf(even[0]) + 1
}
