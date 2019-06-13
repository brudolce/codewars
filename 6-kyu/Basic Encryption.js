function encrypt(text, rule) {
  let str = ''
  
  for (let i of text) {
    str += String.fromCharCode((i.charCodeAt()+rule)%256) 
  }
  return str
};
