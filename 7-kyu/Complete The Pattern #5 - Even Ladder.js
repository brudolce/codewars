function pattern(n){
 var output=[];
  for(let i=1;i<=n;i++){
    if (i%2==0)output.push((''+i).repeat(i));
  }
 return output.join('\n');
}
