def number(bus_stops):
    result = 0;
    for i in bus_stops:
        result += i[0]
        result -= i[1]
    return result

# clever solutions
def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])
