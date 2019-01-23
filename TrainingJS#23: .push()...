function infiniteLoop(arr,d,n){
  arr0=[]
  arr1=[[],[],[]]
  for (i=0;i<arr.length;i+=1){
    for(j=0;j<arr[i].length;j+=1){
      arr0.push(arr[i][j]);
    }
  }
  if(d==='right'){
    n=(arr0.length-n)
  }
  for (i=0;i<arr.length;i+=1){
    for(j=0;j<arr[i].length;j+=1){
        arr1[i].push(arr0[n%arr0.length])
        n+=1;
    }
  }  
  return arr1
}
