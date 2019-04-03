function averages(numbers) {
  if (numbers === null || numbers.length<2) return [] 
  const result = []
  for (let i = 0; i < numbers.length-1; i += 1){
    result.push((numbers[i]+numbers[i+1])/2)
  }
  return result
}
