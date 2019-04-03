function remove(s,n){
  
  let i = 0;
  while(s.includes('!') && i<n){
    s = s.replace(/\!/,'');
    i += 1;
  }
  
  return s
}
