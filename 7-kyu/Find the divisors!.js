function divisors(integer) {
  let result = [];
  let count = 0;
  for (let i=2; i < integer; i += 1) {
    if(integer % i === 0) {
      result.push(i);
      count += 1;
    }
  }
  return count !== 0 ? result : `${integer} is prime`
};
