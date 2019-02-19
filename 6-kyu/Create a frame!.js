const frame = (text, char) => {
  let body =''; 
  let len = 0;
  
  for (let i =0; i<text.length; i+=1) {
      if (text[i].length > len) {len = text[i].length};
  }
  
  for (let i =0; i<text.length; i+=1) {
    let b = len - text[i].length
      body += `\n${char} ${text[i]}${' '.repeat(b)} ${char}`;
  }
  
  let mTop =`${char.repeat(len+4)}`;
  let mBot = `\n${char.repeat(len+4)}`;

   return mTop + body + mBot
}
