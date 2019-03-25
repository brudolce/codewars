var capitals = function (word) {
	let a = word.split('')
  let arr=[]
  for (let i = 0;i < word.length; i += 1) {
    if(a[i]===a[i].toUpperCase()) {
      arr.push(i)
    }
  }
  return arr
}
