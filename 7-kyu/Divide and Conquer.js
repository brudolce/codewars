function divCon(x) {
  let num1 = 0,
      num2 = 0;
  x.map(v => (typeof v === "string" ? (num2 += v * 1) : (num1 += v)));
  return num1 - num2;
}
