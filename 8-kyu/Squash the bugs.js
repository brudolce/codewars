function findLongest(str) {
  var spl = str.split(" "),
      longest = 0;
  
  for (var i in spl) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }

  return longest;
}

//clever stuff
function findLongest(str) {
    return Math.max(...str.split(' ').map(word=>word.length))
}

