const arrayLeaders = numbers => {
  return numbers.filter((number, index) => {
    const totalRight = numbers.slice(index + 1).reduce((total, number) => total + number, 0)
    return number > totalRight
  })
}
