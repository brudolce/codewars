def hcf(a,b):
    if a < b:
        a,b = b,a
    if b == 0:
        return a
    else:
        return hcf(b, a % b)

def solution(a):
    div = 0
    if len(a) == 1:
        div = a[0]
    for i in range(0,len(a)-1):
        if div:
            div = hcf(div,a[i])
        else:
            div = hcf(a[i],a[i+1])
    return div*len(a)
