function sumArray(array) {
  if (!Array.isArray(array)) return 0
  let arr = array.sort((a,b)=>a-b);
  arr.pop();
  arr.shift();
  
  return arr.reduce((acc,e)=>acc+e,0)
}
