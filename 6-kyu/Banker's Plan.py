def fortune(f,p,c,n,i):
	for x in range(n-1):
		f = round(f,2) * (1 + round(p,2)/100) - c * (1 + round(i,2)/100)**x
	return f > 0


##solution 2
def fortune(f, p, c, n, i):
    for _ in range(n-1):
        f = int(f * (100 + p) / 100 - c)
        c = int(c * (100 + i) / 100)
        if f < 0:
            return False
    return True
