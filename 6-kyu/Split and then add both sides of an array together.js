function splitAndAdd(arr, n) {
  if (n<=0) return arr
  let a1 = arr.slice(0,Math.floor(arr.length)/2).reverse()
  let a2 = arr.slice(Math.floor(arr.length)/2).reverse()
  let newArr = []
  for (let i=0;i<a2.length;i++){
    if (a1[i]){
      newArr.push(a1[i]+a2[i])
    } else {
      newArr.push(a2[i])
    }
  }
  return splitAndAdd(newArr.reverse(),n-=1)
}
