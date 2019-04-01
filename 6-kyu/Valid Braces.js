function validBraces(braces){
    const validation = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    const stack = [];

    for (let i = 0; i < braces.length; i += 1)
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{')
            stack.push(braces[i]);
        else if (stack[stack.length-1] === validation[braces[i]])
            stack.pop();
        else
            return false;
            
    return stack.length === 0;

}
