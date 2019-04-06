function getNames(data){
  let result = [];
  for (let i of data){
    result.push(i.name)
  }
  return result
}

//with map

function getNames(data){
  return data.map(x=>x.name);
}
