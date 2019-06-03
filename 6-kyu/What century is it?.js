function whatCentury(year) {
  let cent = Math.ceil(year/100)+''
   return cent === '11' || cent === '12' || cent === '13' ? cent + 'th' :
    cent[1] === '1' ? cent + 'st' : 
    cent[1] === '2' ? cent + 'nd' :
    cent[1] === '3' ? cent + 'rd':
    cent + 'th'
}
