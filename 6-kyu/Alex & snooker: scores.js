function frame(score){
   let valid = 0, arr = score.replace(/\(\d+\d*\,\)/, '').split(';');
   for (let i = 0; i < arr.length; i += 1) {
     let str  = arr[i].split('-');
     if (parseInt(str[0]) > parseInt(str[1]))
       valid += 1;
    }
   return [ valid, arr.length-valid];
}
