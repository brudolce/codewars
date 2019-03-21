const systemA = (ticket, n) => ticket * n

const systemB = (card, ticket, perc, n) =>
  Math.ceil(card + (ticket * perc * (1 - perc ** n)) / (1 - perc))

const movie = (card, ticket, perc) => {
  let n = 1
  while (systemA(ticket, n) <= systemB(card, ticket, perc, n)) n += 1

  return n
}
