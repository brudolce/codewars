const money = 10
const candy = 1.42
const chips = 2.4
const soda = 1

const orders = [
  { article: 'candy', quantity: 1, price: candy },
  { article: 'chips', quantity: 1, price: chips },
  { article: 'soda', quantity: 1, price: soda },
]

const change =
  money -
  orders.reduce((total, { quantity, price }) => total + quantity * price, 0)
