function infected(s) {
  let count = 0
  let count2 = 0
  let arr = s.split`X`.map(v=>{
    if (v.includes(1)){
      count+=v.length
      return v.replace(/0/g,1)
    }
    count2+=v.length
    return v
  })
  if (count===0) return 0
  return (count/(count2+count))*100
}
