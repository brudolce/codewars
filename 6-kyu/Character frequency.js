function letterFrequency(text){
  let obj={}
  text = text.toLowerCase()
  for(let letter of text){
    obj[letter] = (obj[letter]||0) +1
  }
  let res = Object.keys(obj)
  
return res.map(e=>[e,obj[e]])
.filter(e=>/[a-z]/.test(e[0]))
.sort((a,b)=>a[1]===b[1] ? a[0].localeCompare(b[0]) : b[1]-a[1])
}
