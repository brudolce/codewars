def sequence_sum(begin_number, end_number, step):
    sum = 0
    while begin_number <= end_number:
        sum += begin_number
        begin_number += step
    return sum
    
