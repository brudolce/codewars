function nthFibo(n) {
 let res = [0,1];
 for (let i = 0; i < n; i += 1) {
   res.push(res[i]+res[i+1])
 }
 return res[n-1]
}
