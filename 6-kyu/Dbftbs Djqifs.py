def encryptor(key, message):
    if key < -26:
        while key < -26:
            key += 26
    elif key > 26:
        while key > 26:
            key -= 26
    new_msg = ''
    for char in message:
        if not char.isalpha():
            new_msg += char
        elif char.isupper():
            new_msg += char_shift(key, char, 65, 90)
        elif char.islower():
            new_msg += char_shift(key, char, 97, 122)
    return new_msg

def char_shift(key, char, lo, hi):
    new_let = ord(char) + key
    if new_let > hi:
        new_let = lo + (new_let - hi) - 1
    elif new_let < lo:
        new_let = hi - (lo - new_let) + 1
    return chr(new_let)
