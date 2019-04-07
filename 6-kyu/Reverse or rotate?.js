function revrot(str, sz) {
  const isEven = (v) =>
    v.split('').reduce((cubeSum, d) => (cubeSum += d ** 3), 0) % 2 === 0;
  const reverse = (v) => v.split('').reverse().join('');
  const rotate = (v) => v.slice(1) + v.slice(0, 1);

  return (str.match(new RegExp(`.{${sz}}`, 'g')) || [])
    .map((v) => (isEven(v) ? reverse(v) : rotate(v)))
    .join('');
}
