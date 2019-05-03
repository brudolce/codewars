const decodeBits = (bits) => {
  const arrayOfBits = bits.match(/(\d)\1*/g);
  const length = Math.min(
    Infinity, ...arrayOfBits.filter(
        (x, i) =>
          (i === 0 && x[0] === '1') ||
          (i > 0 && i < arrayOfBits.length - 1) ||
          (i === arrayOfBits.length - 1 && x[0] === '1'),
      ).map(x => x.length));

  return arrayOfBits.map((x) => {
    const symLength = x.length / length;

    return +x[0]
      ? symLength > 1
        ? '-'
        : '.'
      : symLength > 3
      ? '   '
      : symLength > 1
      ? ' '
      : '';
  }).join``;
};

const decodeMorse = (morseCode) => {
  return morseCode.trim().split('   ')
    .map(str => str.split(' ').map((s) => MORSE_CODE[s]).join('')).join(' ');
};
