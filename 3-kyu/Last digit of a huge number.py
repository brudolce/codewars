from functools import reduce


def get_expo(n):
    if n <= 4: return n
    tail = n % 100 if n % 100 > 1 else n % 1000
    expo = 4 if tail % 4 == 0 else tail % 4
    result = expo if expo > 1 else tail
    return result


def last_digit(numbers):
    if not numbers: return 1
    if len(numbers) == 1: return numbers[0] % 10
    expo = numbers[1] if len(numbers) == 2 else reduce(lambda y, x: x ** get_expo(y), numbers[1:][::-1])
    return ((numbers[0] % 10) ** get_expo(expo)) % 10
