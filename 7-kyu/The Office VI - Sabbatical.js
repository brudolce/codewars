function sabb(x, val, happ) {
  let sabb = 'sabticl'
  x = x.toLowerCase();
  let lCounter = 0;
  let scoreCounter = val + happ;
  for (let i = 0 ; i < x.length; i += 1) {
    if (sabb.indexOf(x[i]) !== -1) {
      if (sabb.indexOf(x[i]) === 'l') lCounter +=1; 
      scoreCounter +=1
    }
  }
  if (lCounter === 3) scoreCounter + 3; 
  return scoreCounter < 22 ? 'Back to your desk, boy.' : 'Sabbatical! Boom!'
} 

//solution 2
const sabb = (x, val, happ) => x.split('').reduce((s,a)=> s + 'sabbatical'.includes(a) , 0) + val + happ > 22 ?
           'Sabbatical! Boom!' :  'Back to your desk, boy.'
