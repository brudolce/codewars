def reverseWords(str):
    z = (str.split(' '));
    z.reverse();
    return ' '.join(z)

# clever solution 1
def reverseWords(str):
    return ' '.join(reversed(str.split(' ')))
    
    
# clever solution 2
def reverseWords(str):
    return " ".join(str.split(" ")[::-1])
