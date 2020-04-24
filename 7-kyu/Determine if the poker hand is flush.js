function isFlush(cards) {
  return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
}
