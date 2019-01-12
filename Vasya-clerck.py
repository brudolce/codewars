def tickets(people):
    p25=0
    p50=0
    for p in people:
        if p == 25:
            p25+=1
        elif p == 50:
            p25-=1
            p50+=1
        elif p == 100:
            if p50==0 and p25>=3:
                p25-=3
            else:
                p25-=1
                p50-=1
        if p25<0 or p50<0:
            return 'NO'
    return 'YES'
                