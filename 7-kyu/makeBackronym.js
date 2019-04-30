const makeBackronym = s => {

const data = {
  A: 'awesome',
  B: 'beautiful',
  C: 'confident',
  D: 'disturbing',
  E: 'eager',
  F: 'fantastic',
  G: 'gregarious',
  H: 'hippy',
  I: 'ingestable',
  J: 'joke',
  K: 'klingon',
  L: 'literal',
  M: 'mustache',
  N: 'newtonian',
  O: 'oscillating',
  P: 'perfect',
  Q: 'queen',
  R: 'rant',
  S: 'stylish',
  T: 'turn',
  U: 'underlying',
  V: 'volcano',
  W: 'weird',
  X: 'xylophone',
  Y: 'yogic',
  Z: 'zero',
}

 return s.toUpperCase().split('')
  .reduce((backronym, char) => `${backronym} ${dict[char]}`, '')
  .slice(1)
}
