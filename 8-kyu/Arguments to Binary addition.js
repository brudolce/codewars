function arr2bin(arr){
  return arr
    .reduce((acc, v) => (typeof v === 'number' ? acc + v : acc),0)
    .toString(2)
}
