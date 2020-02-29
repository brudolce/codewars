function numericals(s){  
  let obj = {}
  let finalStr = ''
  for ( let i = 0; i < s.length; i++){
       let elem = s[i]
       if (!obj[elem] ) {
         obj[elem] = 1
       } else {
          obj[elem] +=1
       }
       finalStr += obj[elem]
       
  }
   
     return finalStr
}
