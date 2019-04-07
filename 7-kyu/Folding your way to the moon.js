function foldTo(distance){
  let counter = 0;
  if(distance < 0) return null
  for(let i = 0.0001; i < distance; i += i) counter +=1;
  return counter;
}
