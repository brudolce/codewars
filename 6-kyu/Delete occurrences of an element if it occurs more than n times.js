function deleteNth(arr, n) {
  const repeated = {}

  return arr.filter(num => {
    repeated[num] = (repeated[num] || 0) + 1
    const repetitions = repeated[num]

    return repetitions <= n
  })
}
