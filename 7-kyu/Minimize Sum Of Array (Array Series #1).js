const minSum = arr =>
  [...arr].sort((a, b)=>a-b).reduce((a,e,i,arr) =>a+e*arr[arr.length-i-1],0)/2
