function removeDuplicateWords(s) {
    let arr = s.split(' ')
     arr = arr.filter(function(elem,index){
       return arr.indexOf(elem) == index
     })
    return arr.join(' ')
  }  
