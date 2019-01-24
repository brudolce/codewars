const ultimateReverse = s => {
  const arr=[];
  for (i = s.length - 1; i >= 0; i -= 1){
    for( j = s[i].length - 1 ; j >= 0 ; j -= 1){
      arr.push(s[i][j]);
    };
  };
  let t = arr.join('');
  let arr0=[];
  let start = 0;
  s.forEach((item)=>{
    arr0.push(t.slice(start, item.length + start));
    start += item.length;
  });
  return arr0
};
