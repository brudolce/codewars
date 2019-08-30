function wordValue(a) {
  return a.map((s,i) => s.replace(/\s/g, '')
                         .split('')
                         .map(b => (b.charCodeAt()-96))
                         .reduce((acc, cur) => (acc+=cur),0)*(i+1));
}
