const productArray = numbers => {
  const sum = numbers.reduce((acc, e) => acc * e)
  return numbers.map(number => sum / number)
}
