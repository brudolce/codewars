function anagramCounter (wordsArray) {
  let count = 0;
  const srt = a => a.toString().split('').sort().join('');
  wordsArray.forEach((a,b)=>{
  const rest = wordsArray.slice(b+1);
    rest.forEach((z)=>{
      if (srt(a)===srt(z)){
        count +=1;
      }
    })
  })
  return count
}
