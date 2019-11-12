function largestPower(n){
  let res = 0;
  while(3**res < n) res++;
  return res-1;
}
