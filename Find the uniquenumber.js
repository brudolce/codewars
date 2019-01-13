function findUniq(arr) {
    for(i=0;i<arr.length;i+=1){ 
        if (arr[i]!=arr[i+1]){
        return arr[i+1]
      }
    };
  }

//solution2
function findUniq(arr) {
    for(i=0;i<arr.length;i+=1){
     if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]{
        } else {
          return arr[i]
        }
    };
  }