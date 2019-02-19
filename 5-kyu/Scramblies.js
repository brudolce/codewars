function scramble(str1, str2) {
const joao1={};
const joao2={};

  for (let i=0;i<str1.length;i+=1){
    joao1[str1[i]]=(joao1[str1[i]]||0)+1;
    joao2[str1[i]]=0
  }
 
  for (let i=0;i<str2.length;i+=1){
    joao2[str2[i]]+=1;
    if( joao2[str2[i]] <= joao1[str2[i]] ) {
      true;
    } else {
      return false
    }
  }
 return true
 
 //const arr1=str1.split('').sort()
 //const arr2=str2.split('').sort()
  //let i,j;

 //arr2.forEach((a,b)=> {if(arr1.indexOf(b) === -1) return false});

 //for (i= 0, j = 0; i < arr2.length && j <= arr1.length; j+=1) {
//   if (arr2[i] === arr1[j]) i+=1
 //}
 //return j <= arr1.length
}
