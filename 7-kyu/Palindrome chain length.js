const palindromeChainLength  = n => {  
  let x = parseInt((''+n).split('').reverse().join(''));
  return n !== x ? 1 + palindromeChainLength (n + x) : 0
}
