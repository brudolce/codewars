from collections import deque
def sequence_gen(*args):
    a = deque(args)
    for i in a:
        yield i
    while True:
        s = sum(a)
        yield s
        a.popleft()
        a.append(s)
