function mean(lst){
  let l = lst.filter(x=>/[a-z]/gi.test(x))
  let num = lst.filter(x=>/[\d]/gi.test(x))

  return [num.reduce((a,b)=>a + +b,0)/num.length ,l.join('')]
}
