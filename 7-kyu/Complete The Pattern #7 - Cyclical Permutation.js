function pattern(n){
  return Array.from({ length: n }, (x, i) =>
    Array.from({ length: n }, (x, j) =>{
    return (i + j) % n + 1}).join('')
  ).join('\n');
}
