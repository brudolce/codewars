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


// smart dudes doing fancy tricks

function groupCheck(braces){
   while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
 }
