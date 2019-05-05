
function goto(level, button) {
  return typeof button !== 'string' || button < 0 || button > 3 || 
         typeof level  !== 'number' || level  <  0  || level   > 3 || level ==1.5  ? 
         0 : parseFloat(button) - level;
}

//#2
function goto(level,button){
  if ([0,1,2,3].indexOf(level) > -1 && ['0','1','2','3'].indexOf(button) > -1)
    return +button - level;
  return 0;
}
