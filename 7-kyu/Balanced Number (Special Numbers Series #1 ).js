const balancedNum = number => {
  const stringNum = String(number)
  const numbers = Array.from(
    { length: (stringNum.length - 1) / 2 },
    (_, index) => stringNum[index] - stringNum[stringNum.length - 1 - index]
  )

  return numbers.reduce((total, number) => total + number, 0) === 0 ? 'Balanced' : 'Not Balanced'
}
