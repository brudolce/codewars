//valid solution
function checkWord(board, word) {
  let dirs = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  let isValid = function (x, y) {
    return x > -1 && y > -1 &&
      x < board.length && y < board[x].length;
  };

  var dfs = function (b, w, p) {
    if (w.length == 0)
      return true;

    for (let dir of dirs) {
      let x = p[0] + dir[0];
      let y = p[1] + dir[1];
      if (!isValid(x, y) || b[x][y] != w[0])
        continue;

      b[x][y] = b[x][y].toLowerCase();
      if (dfs(b, w.substr(1), [x, y]))
        return true;
      b[x][y] = b[x][y].toUpperCase();
    }
    return false;
  };

  board = board.map(x => x.slice());
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] == word[0]) {
        board[i][j] = board[i][j].toLowerCase();
        if (dfs(board, word.substr(1), [i, j]))
          return true;
        board[i][j] = board[i][j].toUpperCase();
      }
  return false;
}
