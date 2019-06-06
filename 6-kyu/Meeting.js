function meeting(s) {
  return s.split(';').map(x=>x.split(':').reverse().join(', '))
  .map(x=> x = '(' + x.split('').map(l=>l.toUpperCase()).join('') + ')')
  .sort((a,b)=>a.localeCompare(b)).join('')
}
