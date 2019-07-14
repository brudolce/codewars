function isPalindrome(str) {
  return str.split("").reverse().join("") === str
}

function buildPalindrome(str) {
  let temp = str;
  
  for(let i =0; i < str.length; i++){
      temp = str + str.slice(0, i).split("").reverse().join("");
      if(isPalindrome(temp)){ break; }
  }
  return temp;
}
