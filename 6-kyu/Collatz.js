//clever stuff
function collatz(n){
  if(n===1) return "1";
  return n + "->" + collatz(n%2===0?n/2:3*n+1)
}

//nice for used here
function collatz(n){
  let num=[];
  for (let i=n;;){
    if (i===1){
    num.push(i)
    break
    }
    if (i%2===0) {
    num.push(i)
    i=i/2
    } else {
    num.push(i)
    i=i*3+1
    }
  }
  return num.join('->')
}
