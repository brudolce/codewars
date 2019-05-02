function howmuch(m, n) {
    if(m === n) return [];
    let min = Math.min(m,n), max = Math.max(m, n), arr = [];
    for(i = min; i <= max; i++){
      if((i-1)/9 % 1 === 0 && (i-2)/7 % 1 === 0)
        arr.push(["M: " + i, "B: " + (i-2)/7, "C: " + (i-1)/9])
    }
    return arr;
}
