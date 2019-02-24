def pig_it(text):
    arr = text.split(' ')
    result = []
    for word in arr:
        if word.isalpha():
            if len(word) > 1:
                result.append(word[1:]+word[0]+'ay')
            else:
                result.append(word + 'ay')
        else:
            result.append(word)
    return ' '.join(result)
