function checkThreeAndTwo(array) {
let a=array.filter(value=>value.match('a')).length;
let b=array.filter(value=>value.match('b')).length
let c=array.filter(value=>value.match('c')).length
  return ((a===3||b===3||c===3)&&(a===2||b===2||c===2))
}
