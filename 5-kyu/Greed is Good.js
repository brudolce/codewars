function score( dice ) {
 let result=0;
 let arr2=[];
 
 const arr1=dice.sort((a,b)=>a-b)
 for (let i=1;i<7;i++)
 { 
 arr2.push(arr1.slice(arr1.indexOf(i),arr1.lastIndexOf(i)+1))
 }
 let arr=arr2.map(v=>v.length)
 for (let j=0;j<5;j++){
if(arr[0]>=3){ result+=1000;arr[0]-=3;}
if (arr[0]>0){result+=100;arr[0]-=1}
if(arr[1]>=3){ result+=200;arr[1]-=3}
if(arr[2]>=3){ result+=300;arr[2]-=3}
if(arr[3]>=3){ result+=400;arr[3]-=3}
if(arr[4]>=3){ result+=500;arr[4]-=3;}
if (arr[4]>0){result+=50;arr[4]-=1}
if(arr[5]>=3){ result+=600;arr[5]-=3}
 }
 return result
}
