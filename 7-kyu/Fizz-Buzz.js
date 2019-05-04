const solution = n =>
  [...new Array(n).keys()].slice(1).reduce(
    (result, number) => {
      if (number % 15 === 0) result[2]++
      else if (number % 3 === 0) result[0]++
      else if (number % 5 === 0) result[1]++

      return result
    },
    [0, 0, 0]
  )
