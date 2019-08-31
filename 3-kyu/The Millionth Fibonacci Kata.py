 
 def fib(n):
  if n < 0: return (-1)**(n % 2 + 1) * fib(-n)
  a = b = x = 1
  c = y = 0
  while n:
    if n % 2 == 0:
      (a, b, c) = (a * a + b * b,
                   a * b + b * c,
                   b * b + c * c)
      n /= 2
    else:
      (x, y) = (a * x + b * y,
                b * x + c * y)
      n -= 1
  return y
 
 
 ##good solution
 def calc(num):
    if num == 0:
        return (0, 1)
    elif num == 1:
        return (1, 1)
    else:
        a, b = calc(num // 2)
        p = a * (2 * b - a)
        q = b * b + a * a
        return (p, q) if num % 2 == 0 else (q, p + q)

def fib(num):
    if num >= 0:
        return calc(num)[0]
    else:
        return -calc(-num)[0] if num % 2 ==0 else calc(-num)[0]
