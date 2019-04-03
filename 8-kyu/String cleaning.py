def string_clean(s):
    l = list()
    for x in s:
        if x not in ['0','1','2', '3', '4', '5', '6', '7', '8', '9']:
            l.append(x)
    return '' if l==[] else "".join(l) 
