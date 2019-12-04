function uniqueSum(lst){
  return lst.length === 0
    ? null
    : Array.from(new Set(lst)).reduce((acc,e)=>acc+e,0)
}
