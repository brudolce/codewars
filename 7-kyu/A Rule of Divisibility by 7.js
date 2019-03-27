const seven = m => {
  let times = 0
  let number = m

  while (String(number).length > 2) {
    times++
    number = Math.floor(number / 10) - (number % 10) * 2
  }

  return [number, times]
}
