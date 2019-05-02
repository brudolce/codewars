function min(a, b){
  if(a===null) a=0;
  if(b===null) b=0;
  
  if(isNaN(a) || isNaN(b))return NaN;
  
  return (a<b)?a:b;
}
