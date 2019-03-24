def deep_count(arr):
    count = 0;
    for i in arr:
        if type(i) is list:
            count += deep_count(i)
        count += 1;
    return count
