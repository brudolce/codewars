function pascal(depth) {
  let result = []
  for (let i = 1; i <= depth; i++) {
    var row = []
    for (let j = 0; j < i; j++) {
      row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
    }
    result.push(row)
  }
  return result
}
