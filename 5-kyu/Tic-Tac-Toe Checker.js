function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}

//solution 2
function isSolved(board) {
  var b = board.join(';').replace(/,/g, '' );
  return  /(111|1....1....1|1...1...1|..1..1..1)/.test(b) ? 1 :
          /(222|2....2....2|2...2...2|..2..2..2)/.test(b) ? 2 :
          /0/.test(b)? -1 : 0; 
}
