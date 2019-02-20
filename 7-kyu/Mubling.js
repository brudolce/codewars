const accum = s => {
  return s.split('').map((elem, i) => {
      const result = elem.repeat(i + 1)
      return (result[0].toUpperCase() + result.slice(1).toLowerCase())
    }).join('-')
}
