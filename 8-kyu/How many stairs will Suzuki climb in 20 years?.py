from functools import reduce

def stairs_in_20(stairs):
    result = 0;
    for i in stairs:
         result += reduce(lambda a,b : a + b, i)
    return result * 20

#clever solution
def stairs_in_20(stairs):
    return 20 * sum(map(sum, stairs))
