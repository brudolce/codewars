//too many sorts solution
function largest(n,xs){
   return xs.sort((a,b)=>b-a).slice(0,n).sort((a,b)=>a-b);
}

//clever solution
function largest(n,xs){
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}
