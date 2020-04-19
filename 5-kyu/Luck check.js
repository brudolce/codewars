function luckCheck(ticket){
  let t = ticket.match(/\d/gi)
  const even = t.length%2===0
  const len = Math.floor(t.length/2)
    
 
    return even 
    ? t.slice(0,len).reduce((acc,e)=>acc+ +e,0) === t.slice(len,t.length).reduce((acc,e)=>acc+ +e,0)
    : t.slice(0,len).reduce((acc,e)=>acc+ +e,0) === t.slice(len+1,t.length).reduce((acc,e)=>acc+ +e,0)
  
  
}
