def determinant(matrix):
    def recurMethod(matrix):
        if len(matrix) == 1:
            return matrix[0][0]
        total = 0
        for ind, mult in enumerate(matrix[0]):
            new_matrix = []
            # create sub_matrix
            for row in matrix[1:]:
                sub_row = []
                for sub_ind, col in enumerate(row):
                    if sub_ind != ind:
                        sub_row.append(col)
                new_matrix.append(sub_row)
            if ind % 2 == 0:
                total += mult * recurMethod(new_matrix)
            else:
                total -= mult * recurMethod(new_matrix)
        return total
    return recurMethod(matrix)
    
    #clever sol
    def determinant(m):
    a = 0
    if len(m) == 1:
        a = m[0][0]
    else:
        for n in xrange(len(m)):
            if (n + 1) % 2 == 0:
                a -= m[0][n] * determinant([o[:n] + o[n+1:] for o in m[1:]])
            else:
                a += m[0][n] * determinant([o[:n] + o[n+1:] for o in m[1:]])
                
    return a
