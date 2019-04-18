def is_merge(s, part1, part2):
    s2 = part1 + part2

    if checkOrder(s, part1) == False or checkOrder(s, part2) == False or len(s) != len(s2):
        return False

    for w in checkStr(s).items():
        for w2 in checkStr(s2).items():
            if w[0] == w2[0] and w[1] != w2[1]:
                return False

    return True

def checkOrder(s, part):
    w_dict = {}
    for w in part:
        try:
            str_index = s.index(w)
        except ValueError:
            str_index = -1
        if str_index != -1:
            s = s[str_index+1:]
        else:
            return False
    return True

def checkStr(s):
    w_dict = {}
    for w in s:
        if w_dict.get(w) == None:
            w_dict[w] = 1
        else:
            w_dict[w] = w_dict.get(w) + 1
    return w_dict
    
    
    #clever
    def is_merge(s, part1, part2):
    if not part1:
      return s == part2
    if not part2:
      return s == part1
    if not s:
      return part1 + part2 == ''
    if s[0] == part1[0] and is_merge(s[1:], part1[1:], part2):
      return True
    if s[0] == part2[0] and is_merge(s[1:], part1, part2[1:]):
      return True
    return False
