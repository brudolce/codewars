function longest(s1, s2) {
 let result = [];
 
 for (let i=0; i < s1.length; i += 1) {
    if (!result.includes(s1[i])) result.push(s1[i]);
  }
  
  for (let i=0; i < s2.length; i += 1) {
    if (!result.includes(s2[i])) result.push(s2[i]);
  }
  
  return result.sort((a,b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
  }).join('')

}
