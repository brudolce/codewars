function balance(left,right){
  left = left.split('').reduce((acc,e)=>acc + (e==='!'?2:3),0)  
  right = right.split('').reduce((acc,e)=>acc + (e==='!'?2:3),0)  

  return left===right ? 'Balance' : left>right ? 'Left' : 'Right'
}
