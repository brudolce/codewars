function sumOfDivided(lst) {
  let obj = {};
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] >= 0){
      for (let p = 2; p <= lst[i]; p++) {
        if (lst[i] % p == 0) {
          let prime = true;
          for (k in obj) {
            if (p % k === 0 && p != k)
              prime = false;
          }
          if (prime) {
            if (!(p in obj)) obj[p] = 0;
            obj[p] += lst[i];
          }
        }
      }
    } else {
      for (let p = 2; p <= -lst[i]; p++) {
        if (-lst[i] % p == 0) {
          let prime = true;
          for (k in obj) {
            if (p % k === 0 && p != k) prime = false;
          }
          if (prime) {
            if (!(p in obj)) obj[p] = 0;
            obj[p] += lst[i];
          }
        }
      }
    }
  }
  let res = [];
  for (k in obj)
    res.push([parseInt(k,10), obj[k]]);
  return res;
}
