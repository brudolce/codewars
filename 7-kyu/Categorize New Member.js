function openOrSenior(data){
  return data.map( e => {
    if (e[0] > 54 && e[1] > 7) return 'Senior'
    return 'Open'
  })
}
