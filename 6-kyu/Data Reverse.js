function dataReverse(data) {
  if (data.length===0) return []
  const result = [];
  let size = data.length/8
  for (let i = 0; i < size; i += 1){
    result.push(data.splice(0,8));
  }
  return result.reverse().join().split(',').map(x=>+x);
}
