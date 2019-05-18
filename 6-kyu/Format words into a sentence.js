function formatWords(words){
  if (!words) return ''
  let arr = words.filter(x=>x != '');
  return arr.length<2 ? arr.join(' and ')
  : arr.slice(0, arr.length-1).join(', ') + ' and ' + arr[arr.length-1]
}
