const numberToHexadecimal = number => number.toString(16).padStart(2, '0')
const shadesOfGrey = n => {
  if (n < 0) return []
  const max = Math.min(n, 254)
  return Array.from({ length: max }, (_, index) => {
    const hexadecimal = numberToHexadecimal(index + 1)
    return `#${hexadecimal}${hexadecimal}${hexadecimal}`
  })
}
