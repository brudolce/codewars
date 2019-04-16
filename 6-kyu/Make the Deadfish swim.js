function parse( data ) {
  const result = [];
  let counter = 0;
  for (let i of data){
    if (i==='i') counter +=1;
    if (i==='d') counter -=1;
    if (i==='s') counter = Math.pow(counter,2);
    if (i==='o') result.push(counter);
  }  
  return result
}
