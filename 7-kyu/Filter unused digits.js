function unusedDigits(...args){
  return   '0123456789'.replace(new RegExp(`[${args}]`, 'g'), '')
}
