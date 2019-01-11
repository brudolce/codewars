function squareDigits(num){
  let result = String(num).split('').map(function(digit){
    return Math.pow(digit, 2)
  });
    return Number(result.join(''))
  }

