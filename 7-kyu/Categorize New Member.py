def filters(x):
    if x[0]>54 and x[1]>7:
        return str('Senior')
    return str('Open')

def openOrSenior(data):
    return list(map(filters, data))


# clever solution 1
def openOrSenior(data):
  return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]

# clever solution 2
    res = []
    for i in data:
      if i[0] >= 55 and i[1] > 7:
        res.append("Senior")
      else:
        res.append("Open")
    return res
