def counter_effect(hit_count):
	l = list()
	m= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	for x in hit_count:
		l.append(m[:m.index(int(x))+1])
	return l
