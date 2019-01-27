function tribonacci(signature,n){
    if (n < 3) {
      return signature.slice(0,n);
    }
    let arr = signature;  
    for (var i = 3; i < n; i++) {
      arr.push((arr[i-1] + arr[i-2] + arr[i-3]));
    }
    
    return arr;
}
