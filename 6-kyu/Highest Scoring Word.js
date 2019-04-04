function high(x){
  let points = x.split(' ').map(e=>e.split('').reduce((acc,e)=>acc + e.toLowerCase().charCodeAt(0)-96,0))
  return x.split(' ')[points.indexOf(Math.max(...points))] 
}
