function repeats(arr){
return arr.reduce((acc,e,i)=>
  arr.indexOf(e)===arr.lastIndexOf(e)?acc+e:acc+0,0)
};
