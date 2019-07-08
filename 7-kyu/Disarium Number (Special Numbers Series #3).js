
function disariumNumber(n){
  let str=(''+n).split(''),sum=[];
  for (let i=0;i<str.length;i++) sum.push(Math.pow(str[i],i+1));
  return sum.reduce((a,b)=>a+(b*1),0)===n?"Disarium !!":"Not !!";
}
