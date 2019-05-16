function palindrome(string) {
  return string.replace(/[^a-z]/gi,'').toLowerCase().split('')
  .map((e,i,arr)=>arr[i].indexOf(e)===arr[arr.length-i-1].lastIndexOf(e))
  .filter(e=>e===false).length<1
}
