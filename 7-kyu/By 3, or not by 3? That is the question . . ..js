const divisibleByThree = str => [...str].reduce((total, num) => total + Number(num), 0) % 3 === 0
