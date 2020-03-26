function lateRide(n) {
  return ((n / 60 | 0)+ '' + n % 60).split('').reduce((start,next)=>start+next*1,0);
}
