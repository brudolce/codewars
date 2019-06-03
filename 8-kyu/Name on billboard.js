function billboard(name, price = 30){
  let e = 0;
  for (let i=1;i<=name.length;i++) e += price;
  return e
} 
