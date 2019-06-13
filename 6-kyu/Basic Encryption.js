function encrypt(text, rule) {
  let str = ''
  
  for (let i of text) {
    str += String.fromCharCode((i.charCodeAt()+rule)%256) 
  }
  return str
};


//clever solution
function encrypt(text, rule) {
  return text.replace(/./g, c => String.fromCharCode((c.charCodeAt() + rule) & 255))
}
