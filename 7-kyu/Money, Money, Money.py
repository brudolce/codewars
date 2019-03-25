def calculate_years(principal, interest, tax, desired):
    year = 0;
    while principal < desired:
        principal += principal * interest - principal * interest * tax;
        year += 1;
    return year

