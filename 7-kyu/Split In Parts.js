var splitInParts = function(s, partLength){
  let arr=[];
  for (let i=0;i<s.length;i+=partLength){
  arr.push(s.slice(i,i+partLength))
  }
  return arr.join(' ')
}
