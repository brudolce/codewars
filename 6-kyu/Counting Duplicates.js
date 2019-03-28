function duplicateCount(text){
   let obj = {};
   text.toLowerCase().split('').forEach(a => obj[a] = (obj[a]||0) + 1);
   return Object.keys(obj).filter(a => obj[a] > 1).length;
}
