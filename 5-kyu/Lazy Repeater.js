from itertools import cycle

def make_looper(s):
    g = cycle(s)
    return lambda: next(g)
