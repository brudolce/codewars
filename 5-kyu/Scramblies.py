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
