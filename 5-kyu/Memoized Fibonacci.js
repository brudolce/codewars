var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
  let arr=[1,1];
  for (let i=1;i<n;i++)
  {arr.push(arr[i-1]+arr[i])}
    return arr[arr.length-2]
}
