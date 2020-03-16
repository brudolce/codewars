function getOrder(input) {
  const menu =[ 'burger','fries','chicken','pizza','sandwich','onionrings' ,'milkshake','coke']
  const arr = []
  for (let i=0;i<menu.length;i++){
      arr.push(input.match(new RegExp(`${menu[i]}`,'gi')))
  }
  return  [].concat(...arr).filter(v=>v).map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join` `
}
