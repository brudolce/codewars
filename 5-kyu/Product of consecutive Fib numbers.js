function fibonacci(num) {
  let a = 1
  let b = 0
  let temp

  while (num >= 0) {
    temp = a
    a += b
    b = temp
    num--
  }

  return b
}

function productFib(prod) {
  let fibonacciOne = fibonacci(0)
  let fibonacciTwo = fibonacci(1)
  let n = 1

  while (fibonacciOne * fibonacciTwo < prod) {
    fibonacciOne = fibonacci(n)
    n++
    fibonacciTwo = fibonacci(n)
  }

  if (fibonacciOne * fibonacciTwo === prod)
    return [fibonacciOne, fibonacciTwo, true]

  fibonacciTwo = fibonacci(n)
  return [fibonacciOne, fibonacciTwo, false]
