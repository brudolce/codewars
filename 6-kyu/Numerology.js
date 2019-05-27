function solution(date){
  let d = date.getDate()+''
  let m = date.getMonth()+1+''
  let y = date.getFullYear()+''
  let res = 0;
  for (let letter of d+m+y) {
    res += +letter;
    if (res>=10) res = String(res).split('').reduce((acc,e)=>acc + +e,0);
  } 
  return res
}
