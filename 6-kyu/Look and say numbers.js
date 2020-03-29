function lookAndSay(data,len) {
  function next(token) { return '' + token.length + token[0]; }
  function process() { return data = data.match(/(\d)\1*/g).map(next).join(''); }
  return Array.apply(0, Array(len)).map(process);
}
