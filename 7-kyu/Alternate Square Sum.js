function alternateSqSum(arr){
  return  arr.reduce((acc, e, i) => i % 2 === 0 ? acc + e : acc + e ** 2,0)
}
