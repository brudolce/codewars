def filters(x):
    if x[0]>54 and x[1]>7:
        return str('Senior')
    return str('Open')

def openOrSenior(data):
    return list(map(filters, data))
