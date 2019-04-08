 function groupCheck(s){
  const pile =[]
  const obj = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  
  for (let i of s) {
    if (i === '(' || i === '[' || i === '{') pile.push(i);
    else if (pile[pile.length-1] === obj[i]) pile.pop();
    else return false;
  }
    
    
    return pile.length === 0;
 }
