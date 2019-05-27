const sandwiches = 4
const salads = 6
const wraps = 5
const frenchFries = 10

const orders = [
  { food: 'sandwiches', quantity: sandwiches, price: 8 },
  { food: 'salads', quantity: salads, price: 7 },
  { food: 'wraps', quantity: wraps, price: 6.5 },
  { food: 'french fries', quantity: frenchFries, price: 1.2 },
]

const totalPrice = orders.reduce(
  (total, { quantity, price }) => total + quantity * price,
  0
)
