function validate(n){
  return [...String(n)]
    .reverse()
    .map((e, i) => i % 2 ? e * 2 : Number(e))
    .map(e => e > 9 ? e - 9 : e)
    .reduce((prev, curr) => prev + curr) % 10 ? false : true;
}
