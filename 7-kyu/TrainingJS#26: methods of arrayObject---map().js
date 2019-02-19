function isolateIt(arr){
  return arr.map((a,b,c) => { 
    if (c[b].length%2===0) { 
      return c[b].slice(0,(c[b].length/2))
      + '|' + c[b].slice(c[b].length/2)
    } else {
      return c[b].slice(0,(c[b].length/2))
      + '|' + c[b].slice((c[b].length/2)+1)
    }
    });
}
