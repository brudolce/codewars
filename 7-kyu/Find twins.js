function elimination(arr){
  return arr.sort((a,b)=>a-b).filter((v,i,arr)=>arr[i]===arr[i+1])*1||null
}
