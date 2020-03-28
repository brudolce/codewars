const helloWorld = () => {
  const zero  = p => x => x;
  const one   = p => x => p(zero(p)(x));
  const two   = p => x => p(one(p)(x));
  const three = p => x => p(two(p)(x));
  const four  = p => x => p(three(p)(x));
  const five  = p => x => p(four(p)(x));
  const six   = p => x => p(five(p)(x));
  const seven = p => x => p(six(p)(x));
  const eight = p => x => p(seven(p)(x));
  const nine  = p => x => p(eight(p)(x));
  
  const zeroLiteral = +[];
  const oneLiteral = !+[];
  
  const toInteger = number => number(x => x + oneLiteral)(zeroLiteral);
  
  const charCodes = [
      [seven, two],
      [one, zero, one],
      [one, zero, eight],
      [one, zero, eight],
      [one, one, one],
      [three, two],
      [eight, seven],
      [one, one, one],
      [one, one, four],
      [one, zero, eight],
      [one, zero, zero],
      [three, three]
  ];
  
  return charCodes.map(codes => codes.map(fn => toInteger(fn).toString()).join(String()))
    .map(number => String.fromCharCode(number))
    .join(String())
}
