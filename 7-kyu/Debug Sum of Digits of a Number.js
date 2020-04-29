function getSumOfDigits(integer) {
   return integer.toString().split('').reduce((a,b)=>a+ +b,0)
}
