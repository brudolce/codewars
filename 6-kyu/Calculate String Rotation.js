function shiftedDiff(first,second){
  if (first == second) return 0;
  if (first.length != second.length) return -1;
  let comp = first[first.length-1] + first.substring(0, first.length-1);
  let i = 1;
  while (comp != first) {
    if (comp == second) return i;
    comp = comp[comp.length-1] + comp.substring(0, comp.length-1);
    i += 1;
  }
  return -1;
}

//clever stuff
function shiftedDiff(first, second) {
  if (first.length != second.length) return -1
  return (second + second).indexOf(first)
}
