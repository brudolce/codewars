function firstNSmallest(array, n) {
  if (n < 1) return [];
  
  const compare = array.slice().sort((a,b)=>a-b).slice(0,n);
  
  const result = [];             
  
  
  for (let i=0; i < array.length; i += 1){
    if (compare.includes(array[i])){
      result.push(array[i]);   
    compare.splice(compare.indexOf(array[i]),1);
    }

  }
  
  return result
}
