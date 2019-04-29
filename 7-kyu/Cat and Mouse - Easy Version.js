function catMouse(x){
  return /C\.{0,3}m/.test(x) ? 'Caught!' : 'Escaped!'
}
