function maxMultiple(divisor, bound){
  let n = divisor;
  while(n+divisor <= bound) n+= divisor;
  return (divisor > bound) ? 0: n;
}

//some dude is way too clever
function maxMultiple(divisor, bound){
  return bound-bound%divisor
}
