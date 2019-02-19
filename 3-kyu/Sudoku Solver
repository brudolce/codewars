function isvaild(i, j, puzzle, num)
{
  for (let k = 0; k < puzzle[i].length; k += 1) {
    if (puzzle[i][k] == num)
      return false;
  }
  for (let k = 0; k < puzzle.length; k += 1) {
    if (puzzle[k][j] == num)
      return false;
  }
  let ii = Math.floor(i / 3), jj = Math.floor(j / 3);
  for (let k = 3*ii; k < 3*ii + 3; k += 1) {
    for (let l = 3*jj; l < 3*jj + 3; l += 1) {
      if (puzzle[k][l] == num)
        return false;
    }
  }
  return true;
}

function sudoku(puzzle) {
  let flag = 0;
  function dfs(puzzle, index)
  {
    if (index > 80)
    {
      flag = 1;
      return;
    }
    let i = Math.floor(index / 9), j = index % 9;
    if (puzzle[i][j] !== 0)
      return dfs(puzzle, index + 1);
    for (let v = 1; v <= 9; v += 1) {
      if (isvaild(i, j, puzzle, v)) {
        puzzle[i][j] = v;
        dfs(puzzle, index + 1);
      }
    }
    if (flag === 0) puzzle[i][j] = 0;
  }
  dfs(puzzle, 0)
  return puzzle
}
