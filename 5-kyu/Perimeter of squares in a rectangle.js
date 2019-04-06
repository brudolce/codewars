function perimeter(n) { 
  let arr = [1,1]; 
  for (let i = 2; i <= n; i += 1) {
    arr[i] = arr[i-1] + arr[i-2]
  } 
  return 4*arr.reduce((a,b) => a+b, 0)
}
