function maxProduct(numbers, size){
  return numbers.sort((a,b)=>a-b).slice(numbers.length-size).reduce((a,b)=>a*b,1)
}
