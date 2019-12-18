function borrow(s){
 return s ? s.toLowerCase().match(/[a-z]/gi).join('') : ''
}

//sol-2
const borrow = s => s.toLowerCase().replace(/\W/g,'');
