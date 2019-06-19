function distinctDigitYear(year) {
  let y=0;
  for(let i = year; ;i++) {
    if (i.toString().length==[...new Set(i.toString().split(''))].length&&i>year){
      y=i;
      break
    }
  }
  return y
}
