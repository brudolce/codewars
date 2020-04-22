function scoreHand(cards) {
  let arr = cards.map(e=>/j|q|k/gi.test(e)?10: /a/gi.test(e)? 1 : +e).sort((a,b)=>a-b)
  let res = arr.reduce((acc,e)=> acc+e,0)  
  
  return arr[0]===1 && res+10<22 ? res + 10 : res  
}
