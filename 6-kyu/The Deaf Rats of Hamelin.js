var countDeafRats = function(town) {
  let deafs = 0
  let ident = 'O'
  for ( let i = 0; i < town.length; i++){
     if ( town[i] === 'P' ){
      ident =  '~'
     }
     if (town[i] === ident){
       deafs++
     }
     if (town[i] === '~' || town[i] === 'O'){
      i++
     }
   }
  return deafs;
}
