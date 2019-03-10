# first tryout
def scramble(s1, s2):
	i, s, j = 0, {}, 0
	while i < len(s1):
		if s1[i] in s:
			s[s1[i]] += 1
		s.setdefault(s1[i], 1)
		i = i + 1
	
	while j < len(s2):
		if s2[j] not in s:
			return False
		s[s2[j]] -= 1
		if s[s2[j]] < 0:
			return False
		j += 1
	return True


# working solution

def scramble(s1, s2):
    coll = {}
    for s in s1:
        if s in coll:
            coll[s] += 1
        else:
            coll.setdefault(s, 1)
    for s in s2:
        if s not in coll:
            return False
        coll[s] -= 1
        if coll[s] < 0:
            return False
    return True

# clever stuff

def scramble(s1,s2):
	return all( s1.count(x) >= s2.count(x) for x in set(s2))
