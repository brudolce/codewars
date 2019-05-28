const pairing = (val) => val%2===0?0:1

function chessBoardCellColor(cell1, cell2) {
  let board = {A:1,B:0,C:1,D:0,E:1,F:0,G:1,H:0};
  return pairing(board[cell1[0]]+cell1[1]%2) === pairing(board[cell2[0]]+cell2[1]%2)
}


//simple solution
function chessBoardCellColor(cell1, cell2) {
  return squareColor(cell1) == squareColor(cell2);
}

function squareColor(name) {
  return name.charCodeAt(0) + name.charCodeAt(1) & 1;
}
