function charFreq(message) {
  let obj={}
  for(let l of message){
    obj[l]= (obj[l]||0) +1
  }
  return obj
}
