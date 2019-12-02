function bingo(a) {
  let f = new Set(a.filter(x=>x===2||x===9||x===14||x===7||x===15))
  return Array.from(f).length === 5 ? 'WIN' : 'LOSE'
}

//solution 2
const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE'
