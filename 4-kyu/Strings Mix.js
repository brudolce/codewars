function mix(s1, s2){
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const arr1 = [], arr2 = [];
  
  //creating comparison arrays
  abc.map(letter => {
    let reg = new RegExp(letter,'g');
    arr1.push(s1.match(reg) || []);
    arr2.push(s2.match(reg) || []);
  });
  
  //building the max arrays and equal array comparing arr1 and arr2
  const max1 = [], max2 = [], eql = [];
  arr1.forEach(function(elem,i){
    if(elem.length > arr2[i].length && elem.length > 1) { 
      max1.push('1:'+elem.join(''));
    } else if (elem.length < arr2[i].length && arr2[i].length > 1) {
      max2.push('2:'+arr2[i].join(''));
    } else if(elem.length === arr2[i].length && elem.length > 1) {
      eql.push('=:'+elem.join(''))
    }
  });
  
  //building the final array
  let result = max1.concat(max2).concat(eql)
  
  //sorting the max arrays charCodeAt(0) instead of a[0], works better for sort
  result.sort(function(a,b){
    if(b.length === a.length){
      if(a.charCodeAt(0) === b.charCodeAt(0)) {
        return a.charCodeAt(2) - b.charCodeAt(2);
      }
      return a.charCodeAt(0) - b.charCodeAt(0)
    }
    return b.length - a.length
  })
  
  //transform the final array into string
  return result.join('/')
}
