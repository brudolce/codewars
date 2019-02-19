function isOpposite(s1,s2){
let a=true;
for(let i=0;i<s1.length;i+=1){
  if(s1[i]==s2[i]){
    a=false;
  break;
  }
}
  return s1.length!==s2.length || s1.length==0 ? false : a
}
