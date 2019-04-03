function expandedForm(num) {
  let arr = String(num).split('');
  let result = '', len = arr.length;
    
  arr.map((n, index) => {
    if(n > 0) {
      if(result) { result += ' + ';} 
      result += n.padEnd(len - index,'0');
    }
  });

  return result;
}
