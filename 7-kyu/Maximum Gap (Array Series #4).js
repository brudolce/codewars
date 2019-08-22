function maxGap (numbers){
  let res=[];
  let arr=numbers.sort((a,b)=>b-a).map((v,i,arr)=>{
  res.push(arr[i+1]-arr[i])
  })
   return Math.abs((res.filter(v=>!isNaN(v)).sort((a,b)=>a-b))[0])
}
