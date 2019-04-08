function nextBigger(n){
  let n0 = n;
  let s = String(n0);
  let len = s.length;
  for(var i = len - 2; i >= 0; i--) {
    if(s[i] >= s[i + 1]) continue;
      for(let j = len - 1; j > i; j--) {
        if(s[j] > s[i]) {
          var index = j;
          break;
      }
    }
    break;
  }
  let arr = s.split('');

  if (i === -1) return -1;

  if(i !== -1) {
    arr[i] = [arr[index], arr[index] = arr[i]][0];
    var ans = arr.slice(0, i + 1).concat(arr.slice(i + 1).reverse()).join('');
  }
  
  return +ans; //Number(ans)
}
