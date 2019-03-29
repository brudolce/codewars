function countSheeps(arrayOfSheep) {
  let count = 0, i;
  for (i of arrayOfSheep) if(i===true) count +=1
  return count
}
