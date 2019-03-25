def triangular(n):
    return n*(n+1)/2 if n > 0 else 0

#solution 2
def triangular(n):
    return (0, ((n * n) + n) / 2)[bool(n>0)]