function bingo(a) {
  let f = new Set(a.filter(x=>x===2||x===9||x===14||x===7||x===15))
  return Array.from(f).length === 5 ? 'WIN' : 'LOSE'
}
