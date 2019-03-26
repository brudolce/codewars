def tower_builder(n_floors):
    res = []
    temp = ''
    for i in range(n_floors):
      temp = ''
      for t in range(n_floors-i-1):
        temp += ' '
      for j in range(2*i+1):
        temp += '*'
      for k in range(n_floors-i-1):
        temp += ' '
      res.append(temp)
    return res
