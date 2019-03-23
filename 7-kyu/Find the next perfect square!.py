from math import sqrt, pow

def find_next_square(sq):
    print(sqrt(sq))
    if sqrt(sq) % 1 == 0:
        return pow(sqrt(sq)+1,2)
    else:
        return -1

