function encode(str,  n){
  const str0 = String(n);
  let arr=[];
  for(i=0;i<str.length;i+=1){
    let a = parseInt(str0[i % str0.length]);
    let b = (str[i].charCodeAt() - 96)
    arr.push(a + b)
  }
  
    return arr;
}
