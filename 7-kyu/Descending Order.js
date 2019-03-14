function descendingOrder(n){
  return Number(String(n).split('').sort( (a,b) => {
    if (parseInt(a)<parseInt(b)) return 1;
    if (parseInt(a)>parseInt(b)) return -1;
    if (parseInt(a)===parseInt(b)) return 0
    }).join(''))
}
