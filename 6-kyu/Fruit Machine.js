function fruit(reels, spins) {
  let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  
  let [a, b, c] = reels
    .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
    .sort((a, b) => a - b);

  if (a === b && b === c)
    return a * 10;
    
  if (a === b)
    return c === 10 ? a * 2 : a;
  
  return b === c ? b : 0;
}

//lot of code solution
function fruit(reels, spins){
  const object={}
  const arr=[reels[0][spins[0]],reels[1][spins[1]],reels[2][spins[2]]].map(v=>object[v]=object[v]?object[v]+1:1)
  let result =0;
  if (object['Wild']===3) result+=100;
  if (object['Wild']===2) result+=10;
  if (object['Star']===3) result+=90;
  if (object['Star']===2&&object['Wild']!==1) result+=9;
  if (object['Star']===2&&object['Wild']===1) result+=18;
  if (object['Bell']===3) result+=80;
  if (object['Bell']===2&&object['Wild']!==1) result+=8;
  if (object['Bell']===2&&object['Wild']===1) result+=16;
  if (object['Shell']===3) result+=70;
  if (object['Shell']===2&&object['Wild']!==1) result+=7;
  if (object['Shell']===2&&object['Wild']===1) result+=14;
  if (object['Seven']===3) result+=60;
  if (object['Seven']===2&&object['Wild']!==1) result+=6;
  if (object['Seven']===2&&object['Wild']===1) result+=12;
  if (object['Cherry']===3) result+=50;
  if (object['Cherry']===2&&object['Wild']!==1) result+=5;
  if (object['Cherry']===2&&object['Wild']===1) result+=10;
  if (object['Bar']===3) result+=40;
  if (object['Bar']===2&&object['Wild']!==1) result+=4;
  if (object['Bar']===2&&object['Wild']===1) result+=8;
  if (object['King']===3) result+=30;
  if (object['King']===2&&object['Wild']!==1) result+=3;
  if (object['King']===2&&object['Wild']===1) result+=6;
  if (object['Queen']===3) result+=20;
  if (object['Queen']===2&&object['Wild']!==1) result+=2;
  if (object['Queen']===2&&object['Wild']===1) result+=4;
  if (object['Jack']===3) result+=10;
  if (object['Jack']===2&&object['Wild']!==1) result+=1;
  if (object['Jack']===2&&object['Wild']===1) result+=2;
  return result
}
