def arithmetic(a, b, operator):
    if operator == 'add':
        return a + b
    if operator == 'subtract':
        return a-b
    if operator == 'multiply':
        return a*b
    if operator == 'divide':
        return a/b
        
#clever solution

def arithmetic(a, b, operator):
    return {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }[operator]
