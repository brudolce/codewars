function diagonalSum(matrix){
  return matrix.reduce((acc,e,i)=> acc + e[i],0)
}
