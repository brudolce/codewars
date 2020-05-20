const solve = (a, b) => [...a, ...b].filter(char => b.includes(char) ^ a.includes(char)).join('')
