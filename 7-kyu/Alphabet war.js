function alphabetWar(fight) {
  let right = 0, left = 0;
  for (let i of fight) {
    if(i==='w') right += 4;
    if(i==='p') right += 3;
    if(i==='b') right += 2;
    if(i==='s') right += 1;
    if(i==='m') left += 4;
    if(i==='q') left += 3;
    if(i==='d') left += 2;
    if(i==='z') left += 1;
  }
   return right === left ? "Let's fight again!" : 
     right < left ? 'Right side wins!' :
     'Left side wins!'
}
