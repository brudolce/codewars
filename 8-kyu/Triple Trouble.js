function tripleTrouble(one, two, three) {
  let result = "";
  for (let i = 0; i < one.length; i += 1) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

//using reduce
function tripleTrouble(one, two, three){
  return one.split('').reduce((acc, e, i) => `${acc}${one[i]}${two[i]}${three[i]}`, '')
}
