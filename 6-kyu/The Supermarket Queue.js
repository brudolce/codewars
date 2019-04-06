function queueTime(line, registers) {
  var result = [];
  for(let i = 0; i < registers; i+=1) {
    result.push(0);
  }
  for(let i = 0; i < line.length; i+=1) {
    result[0] += line[i];
    result.sort((a,b)=>a-b);
  }
  
  return result[result.length-1];
}
