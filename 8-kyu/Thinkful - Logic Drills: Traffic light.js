function updateLight(current) {
  const arr = ['green','yellow','red','green']
  return arr[arr.indexOf(current)+1]
}

//solution 2
const updateLight = current =>
  current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
