//most voted solution
function solvePuzzle(clues) {
    let permutations = getPermutations(Array(SIZE).fill(0).map((_, i) => i + 1));
    let rows = [], rowsVert = [];
    for (let i = SIZE; i < SIZE * 2; i++) {
      rows.push(permutations.filter(row => isValid(row, i, clues) && isValid(row, SIZE * 5 - 1 - i, clues)));
    }
    for (let i = 0; i < SIZE; i++) {
      rowsVert.push(permutations.filter(row => isValid(row, i, clues) && isValid(row, SIZE * 3 - 1 - i, clues)));
    }
    do {
      removeConflicts(rows, rowsVert);
      removeConflicts(rowsVert, rows);
    } while (rows.reduce((acc, r) => acc + r.length, 0) !== SIZE);
    return rows.map(row => row[0]);
}

function removeConflicts(rows, rowsVert) {
  rows.forEach((r, i) => {
    transpose(r).forEach((values, j) => {
      rowsVert[j] = rowsVert[j].filter(row => values.includes(row[i]));
    });
  });
}

function isValid(row, i, clues) {
  if (clues[i] === 0) return true;
  reduceMethod = i >= SIZE && i < SIZE * 3 ? "reduceRight" : "reduce";
  return row[reduceMethod]((acc, i) => i > acc[1] ? [acc[0] + 1, i] : acc, [0, 0])[0] === clues[i];
}

function getPermutations(list) {
  if (list.length == 1) return [list];
  let result = [];
  for (let i = 0; i < list.length; i++) {
    sublist = list.slice(0);
    let head = sublist.splice(i, 1);
    getPermutations(sublist).forEach(permutation => {
      result.push(head.concat(permutation));
      return result;
    });
  }
  return result;
}

function transpose(matrix) {
  let result = [];
  let l = matrix.length;
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < l; j++) result[i].push(matrix[j][i])
  }
  return result;
}



//refactored permutator
const heightPermutations = permutator([1, 2, 3, 4, 5, 6])
let solveRowt = 0;
const solveRow = (clue, possibleHeights) =>{
  if (!clue) return possibleHeights;
  return  heightPermutations
    .filter(permutation=>permutation
      .reduce((acc, val, idx)=>acc && possibleHeights[idx].includes(val),true)) // Filter permutations
    .filter(arr=> rowClue(arr) === clue) // Filter with right clue
    .reduce((acc, currArr)=> {
      return acc.map((item, idx)=>item.add(currArr[idx]))
    }, Array.from(Array(6)).map(i=>new Set()))
    .map(item=>Array.from(item).sort());// Merge solutions

};
const puzzleReady = (puzzle) => {
return puzzle.reduce((acc, row)=> acc &&
    row.reduce((acc, item) => acc && item.length === 1, true)
    , true)
};
const rowClue = (heights) => {
  let currentMax = 0;
  let clue = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > currentMax) {
      currentMax = heights[i];
      clue++;
    }
  }
  return clue;
};

function permutator (inputArr){
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  };
  permute(inputArr)

  return result;
}
const getRowFromPuzzleByClueIndex = (clueIndex, puzzle) => { // Gets row from puzzle
  let retval = [];
  let row;
  let column;
  let deltaRow = 0;
  let deltaColumn = 0;
  if (clueIndex < 6) {
    column = clueIndex;
    row = 0;
    deltaRow = 1
  }
  else if (clueIndex < 12) {
    column = 5;
    row = clueIndex - 6;
    deltaColumn = -1
  }
  else if (clueIndex < 18) {
    column = 17 - clueIndex;
    row = 5;
    deltaRow = -1
  }
  else {
    column = 0;
    row = 23 - clueIndex;
    deltaColumn = 1;
  }
  for (let i = 0; i < 6; i++) {
    retval.push(puzzle[row][column].slice())
    row += deltaRow;
    column += deltaColumn;
  }
  return retval;
};
const mergeSolutionBackToPuzzle = (clueIndex, solution, puzzle) => { // Gives back the new puzzle
  let retPuzzle = puzzle;
  let row;
  let column;
  let deltaRow = 0;
  let deltaColumn = 0;
  if (clueIndex < 6) {
    column = clueIndex;
    row = 0;
    deltaRow = 1
  }
  else if (clueIndex < 12) {
    column = 5;
    row = clueIndex - 6;
    deltaColumn = -1
  }
  else if (clueIndex < 18) {
    column = 17 - clueIndex;
    row = 5;
    deltaRow = -1
  }
  else {
    column = 0;
    row = 23 - clueIndex;
    deltaColumn = 1;
  }
  for (let i = 0; i < 6; i++) {
    retPuzzle[row][column] = retPuzzle[row][column].filter(item => solution[i].includes(item));
    row += deltaRow;
    column += deltaColumn;
  }
  return retPuzzle;
}

const updateClue = (row) =>{
  let clues = heightPermutations
    .filter(permutation=>permutation
      .reduce((acc, val, idx)=>acc && row[idx].includes(val),true)).map(permutation => rowClue(permutation))
  if(clues.reduce((acc,curr)=>acc && curr === clues[0],true)){
    return clues[0];
  }
  return 0;
}
const solvePuzzle = (clues) => {
  const row = Array.from(Array(6)).map(i=>[1, 2, 3, 4, 5, 6])
  let puzzle = Array.from(Array(6)).map(i=>row.slice());
  while (!puzzleReady(puzzle)) {
    clues.forEach((clue, clueIdx)=> {
      let currentRow = getRowFromPuzzleByClueIndex(clueIdx, puzzle);
      if (!clue){
        clues[clueIdx] = updateClue(currentRow)
      }
      let solution = solveRow(clue, currentRow)
      puzzle = mergeSolutionBackToPuzzle(clueIdx, solution, puzzle)
    })
  }
  return puzzle.map(row=>row.map(col=>col[0]));
}
const puzzleTriesLeft = (puzzle)=>
puzzle.reduce((acc,row)=>acc+= row
    .reduce((a,col)=>a+col.length,0)
  ,0) -36
const puzzleToStr = (puzzle)=>{
  let retval = "";
  puzzle.forEach(row=>{
    row.forEach(column=>{
      retval += column +",\t"
    })
    retval +="\n"
  })
  return retval
}
