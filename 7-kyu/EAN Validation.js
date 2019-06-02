function validateEAN(eanCode){
  let sum = eanCode.slice(0, 12).split('').reduce((s, v, i)=>s + (i % 2 ? v * 3 : +v), 0) % 10;
  return eanCode[12] == (sum ? 10 - sum : 0);
}
