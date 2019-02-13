function tribonacci(signature,n){
    if (n < 3) {
      return signature.slice(0,n);
    }
    let arr = signature;  
    for (let i = 3; i < n; i += 1) {
      arr.push((arr[i-1] + arr[i-2] + arr[i-3]));
    }
    
    return arr;
}
