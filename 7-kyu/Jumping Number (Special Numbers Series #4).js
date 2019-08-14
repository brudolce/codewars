function jumpingNumber(n){
  return [...n+''].every((c,i,a)=>!i||Math.abs(c-a[i-1])===1) ? 'Jumping!!' : 'Not!!';
}
