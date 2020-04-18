function sumEvenNumbers(input) {
  return input.reduce((acc,e)=>e%2===0?acc+e:acc ,0)
}
