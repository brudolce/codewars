function decipherThis(str) {
  return str.split(' ').map(w =>w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    ).join(' ')
}
