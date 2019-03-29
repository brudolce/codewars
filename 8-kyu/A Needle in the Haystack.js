function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack[i]==='needle') return "found the needle at position " + i
  } 
}

//clever solution

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
