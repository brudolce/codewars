function beggars(values, n){
    let arr = [];
    for(let i = 1; i <= n; i++) {
        arr[i-1] = 0;
        for(let j = i-1; j < values.length;) {
            arr[i-1] += values[j];
            j = j + n; 
        }
      }
    return arr;
}
