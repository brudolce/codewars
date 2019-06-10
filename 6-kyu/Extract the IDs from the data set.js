function deepA(arr){
  if(arr===undefined) return [];
  let res = arr.map(x=>x.id)
    for(let el of arr){
      if(el.items) res.push(...deepA(el.items));
    }
  return res
}


function extractIds(data){
  let res = []
    for (let key in data) {
      if (key==='id') res.push(data[key]);
    }
    
  return res.concat(deepA(data.items)) 
}

//clever shit
function extractIds(data) {
  let ids  = []
  if ('id' in data) ids.push(data.id);
  if ('items' in data) data.items.forEach(item => ids = ids.concat(extractIds(item)));
  return ids;
}

//super clever dude
function extractIds(data){
  return (JSON.stringify(data).match(/\d+/g)||[]).map(x=>+x)
}
