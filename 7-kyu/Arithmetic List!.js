var seqlist = function(first,c,l){
  let result = [];
  let i = first;
  while(result.length<l) {
    result.push(i);
    i += c;
  }
  return result
}
