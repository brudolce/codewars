def fortune(f,p,c,n,i):
	for x in range(n-1):
		f = round(f,2) * (1 + round(p,2)/100) - c * (1 + round(i,2)/100)**x
	return f > 0
