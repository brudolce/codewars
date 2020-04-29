function palindrome(num) { 
  if  (typeof num==='number'&&num>0){
    return (''+num)===(''+num).split('').reverse().join('');
  }
  return 'Not valid'
} 
