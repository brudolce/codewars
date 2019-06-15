function validateWord(s){
  var counts = {};
  for(var c of s.toLowerCase()){
    if(counts[c] === undefined){counts[c] = 0;}
    counts[c]++;
  }
  return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
}
