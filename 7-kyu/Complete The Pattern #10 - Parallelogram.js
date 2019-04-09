function pattern(n){
 let str="";
 for (let i=1,j=1;i<=n;i++,j++)
 {if (j>9){j=0}
 str+=j}
 let arr=[];
  for (let i=n,j=0;i>0;i--,j++)
  {arr.push(' '.repeat(i-1)+str+' '.repeat(j))}
 return arr.join('\n');
}
