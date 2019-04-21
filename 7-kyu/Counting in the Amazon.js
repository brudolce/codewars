function countArara(n) {
    let anane='anane';
    let adak='adak';
    let arr=[]
    if (n>0){for (let i=1;i<=n;i++){
    if (i%2==0)arr.push(adak)
    if (i%2!=0&&i==n)arr.push(anane)}}
    return arr.join(' ')
}

//nice recursion
function countArara(n) {
  switch (n) {
    case 0:  return '';
    case 1:  return 'anane';
    case 2:  return 'adak';
    default: return 'adak ' + countArara(n-2);
  }
}
