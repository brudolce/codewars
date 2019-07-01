function makeValley(arr) {
    
    let arr1=[],arr2=[];
    let sorted=arr.slice().sort((a,b)=>a-b);
    for (let i=0;i<arr.length;i++){
    arr1.push(sorted.pop());
    arr2.push(sorted.pop());
    }
    return (arr1.concat(arr2.sort((a,b)=>a-b))).filter(v=>v!=undefined)
}
