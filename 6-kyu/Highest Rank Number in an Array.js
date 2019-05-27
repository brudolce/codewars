function highestRank(arr){
  let obj = {}, max = 0, count=0;
  for (let e of arr) obj[e] = (obj[e]||0) + 1;
  for (let key in obj) { 
    if (obj[key] >= count) {
      count =+ obj[key];
      max = +key;
    }
  }
  return max
}
