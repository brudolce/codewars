function sum(){
  return [...arguments].reduce((a,b)=>a + (Number.isInteger(b)?b:0),0)
}
