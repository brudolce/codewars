function gap(num) {
  const bin = num.toString(2);
  const l = [];
  for (let i = 0; i < bin.length; i++) {
    for (let j = 1; j < bin.length; j++) {
      if (bin[i] === "1" && bin[j] === "1") {
        l.push(bin.slice(i, j + 1));
        i = j;
      }
    }
  }
  return l.map(v => v.length - 2).sort((a, b) => b - a)[0];
}
