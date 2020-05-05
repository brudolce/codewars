def proper_fractions(n):
    if n == 1:
      return 0
    temp = 1
    m = n
    l = int(n ** 0.5)+1
    for i in range(1, l):
      if is_prime(i):
          if m % i ==0:
            temp *= i-1
            m /= i
          while m % i ==0:
               temp *= i
               m /= i

    if m > 1:
        temp *= m-1
    return temp
    
def is_prime(n):
  if n == 0 or n == 1:
    return False
  i = 2
  while (i <= n ** 0.5 ):
    if n % i == 0:
      return False
    i += 1
  return True
