var AmIAfraid = function(day, num){
  return /Monday/.test(day) && num === 12 ? true
  : /Tuesday/.test(day) && num > 95 ? true
  : /Wednesday/.test(day) && num === 34 ? true
  : /Thursday/.test(day) && num === 0 ? true
  : /Friday/.test(day) && num%2 === 0 ? true
  : /Saturday/.test(day) && num === 56 ? true
  : /Sunday/.test(day) && Math.abs(num) === 666  ? true
  : false
  
}
