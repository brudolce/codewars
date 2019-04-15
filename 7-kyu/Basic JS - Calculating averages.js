var Calculator = {
  average: function() {
    if (arguments.length === 0) return 0
    let arr = [...arguments]
    return arr.reduce((a,b)=>a+b,0) / arr.length
  }
};
