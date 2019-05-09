function prime(num) {
  let res = [];
  node: for (let i = 2; i <= num; i+=1) {
    for (let j = 0; j <= res.length; j+=1) {
      if (i % res[j] === 0) continue node;
    }
    res.push(i);
  }
  return res;
}
