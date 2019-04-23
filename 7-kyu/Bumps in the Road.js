function bump(x){
  let count = 0
  for(let i of x) if(i==='n') count+=1;
  return count < 16 ? 'Woohoo!': 'Car Dead'
}

//clever stuff
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"
