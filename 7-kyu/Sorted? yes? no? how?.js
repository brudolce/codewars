function isSortedAndHow(array) {
  if (array.join('') === array.slice().sort((a,b)=>a-b).join('')) return 'yes, ascending';
  if (array.join('') === array.slice().sort((a,b)=>b-a).join('')) return 'yes, descending';
  return 'no'
}

//clever solution
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}
