function mygcd(x,y){
  let div = Math.min(x,y);
  while(x%div!==0 || y%div!==0) {
    div -=1;
  }
  return div
}
