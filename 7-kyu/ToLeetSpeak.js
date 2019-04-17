function toLeetSpeak(str) {
  let result = ''
  const data = {
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2',
  ' ':' '
}
  for (let e of str) {
  result += data[e]   
  }
  return result;
}

//clever

const toLeetSpeak = s => s.replace(/[ABCEGHILOSTZ]/g, c => D[c]);

const D = {
  A: '@', B: '8', C: '(', E: '3',
  G: '6', H: '#', I: '!', L: '1',
  O: '0', S: '$', T: '7', Z: '2'
};
