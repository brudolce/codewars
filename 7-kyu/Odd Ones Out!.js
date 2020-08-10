function oddOnesOut(nums) {
  const obj={};
  nums.map(v=>obj[v]=obj[v]?obj[v]+1:1)
  for (let i in obj){
    if (obj[i]%2!==0) {
      nums=nums.filter(v=>v!==i*1)
      }
  }
  return nums
}
