function isPangram(string){
  let str=string.split(' ').join('').replace(/[\W\d]/g,'').toLowerCase().split('')
  return [...new Set(str)].length==26
}

//clever solution
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
