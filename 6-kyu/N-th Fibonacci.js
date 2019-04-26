function nthFibo(n) {
 let res = [0,1];
 for (let i = 0; i < n; i += 1) {
   res.push(res[i]+res[i+1])
 }
 return res[n-1]
}

//clever stuff
function nthFibo(n) {
  return Math.round((1/Math.sqrt(5))*Math.pow((1+Math.sqrt(5))/2,n-1))
} 
