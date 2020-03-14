function cake(x, y){
  let sum = 0;
  for(var i = 0; i < y.length; i++) {
    if(i%2!=0)
      sum=sum+(y[i].charCodeAt(0)-96);
    else
      sum = sum + y[i].charCodeAt(0);
  }
  return ((x / 100) * 70)  > sum ?  'That was close!' : 'Fire!'
}
