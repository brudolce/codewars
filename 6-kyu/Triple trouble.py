def triple_double(num1, num2):
    n = str(num1)
    m = str(num2)
    for n1 in range(len(n)-2):
        if n[n1] == n[n1+1] and n[n1] == n[n1+2]:
            for m1 in range(len(m)-1):
                if n[n1] == m[m1] and n[n1] == m[m1+1]:
                    return 1
    return 0
