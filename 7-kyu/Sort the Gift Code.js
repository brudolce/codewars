function sortGiftCode(code){
  return code.split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')
}

//clever
function sortGiftCode(code){
  return code.split('').sort().join('');
}
