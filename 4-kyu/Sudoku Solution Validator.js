function validSolution(board) {
    if (rowChecker(board).some(e => e === false)) return false;
    if (colChecker(board).some(e => e === false)) return false;
    if (groupChecker(board).some(e => e === false)) return false;
    return true;
}

function groupChecker(board) {
    let group = [];
    for (let count = 0; count < 3; count += 1)
        for (let i = 0; i < 9; i += 3) {
            group.push(board[i].slice(0, 3).concat(board[i + 1].slice(0, 3)).concat(board[i + 2].slice(0, 3)));
        }
    return rowChecker(group);
}

function rowChecker(board) {
    return board.map(e => boolChecker(e));
}

function colChecker(board) {
    let colArr = [];
    for (let col = 0; col < board.length; col += 1) {
        let column = [];
        for (let row = 0; row < board.length; row += 1) {
            column.push(board[row][col]);
        }
        colArr[col] = boolChecker(column);
    }
    return colArr;
}

function boolChecker(row) {
    return row.every((e, i, arr) => arr.indexOf(e) === i);
}
