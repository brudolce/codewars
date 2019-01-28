function pickIt(arr){
    var odd=[],even=[];
    for(let i=0;i<arr.length;i+=1){
      if(arr[i]%2===0){even.push(arr[i])
      } else {odd.push(arr[i])
      }
    }
    
    return [odd,even];
  }
