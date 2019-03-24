def shift_char(c, n):
    cd = ord(c) + n
    if cd > ord('Z'):
        cd = cd - ord('Z') + ord('A') - 1
    elif cd < ord('A'):
        cd = cd + ord('Z') - ord('A')
    return chr(cd)

def shift_digit(d):
    d = int(d)
    d = 9 - d
    return str(d)
    
def play_pass(s, n):
    p = ''
    for i, c in enumerate(s):
        if c.isdigit():
            p += shift_digit(c)
        elif c.isalpha():
            if i % 2 == 0:
                p += shift_char(c, n).upper()
            else:
                p += shift_char(c, n).lower()
        else:
            p += c
    return p[::-1]
