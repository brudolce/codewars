const Calculator = function() {
  this.evaluate = string => {
    let arr = string.split(' ');
    while(arr.length > 1) {
      const multDiv = arr.findIndex(a => a === '*' || a === '/');
      const index = multDiv === -1 ? arr.findIndex(b => b === '+' || b === '-') : multDiv;
      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);
      const calc = arr[index] === '/' ? a / b : arr[index] === '*' ? a * b : arr[index] === '-' ? a - b : a + b;
      arr.splice(index - 1, 3, calc);
    }
    return Number(arr[0]);
  }
};
