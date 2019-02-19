function giveMeFive(obj){
  let arr=[];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.length === 5) arr.push(key)
      if (obj[key].length === 5) arr.push(obj[key])
    }
  }
  return arr;
}
