function pigIt(str){
  let result = [];
  let arr = str.split(" ");
  for (let i=0; i<arr.length; i += 1) {
    if (arr[i]!='?' && arr[i]!='!') {
      let word = arr[i];
      let letter = word.charAt(0);
      let newWord = word.slice(1) + letter + "ay";
      result.push(newWord);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
}
