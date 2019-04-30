function encode(str) {
  return str.split('').map(v=>/[a-z]/gi.test(v)?v.toLowerCase().charCodeAt()-96:v).join('')
}

//clever solution
const encode = str => {
  return str.replace(/[a-z]/gi, l => {
    let cc = l.charCodeAt(0);
    return cc - (cc < 97 ? 64 : 96);
  });
}
