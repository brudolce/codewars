def nb_dig(n, d):
    i = 0
    counter = 0
    while i <= n:
        check = str(i * i)
        for j in check:
            if int(j) == d:
                counter += 1
        i += 1
    return counter
