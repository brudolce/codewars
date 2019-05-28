function upArray(arr){
  let res4 =  String(+arr.join('').slice(-3)+1);
  return arr.some(x=>x>9||x<0) || arr.length ===0 
    ? null :  [...arr.splice(0,arr.length-3),...res4.split('').map(x=>+x)]
}

//clever solution
function upArray(arr){
  if (arr.length==0||!arr.every(x=>/^\d$/.test(x))) return null;
  for(var i=arr.length-1; i>=0; i--){
    arr[i] = arr[i] == 9 ? 0 : arr[i] + 1;
    if (arr[i]) return arr;
  }
  return [1].concat(arr);
}
