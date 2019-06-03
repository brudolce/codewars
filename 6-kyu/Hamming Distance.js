function hamming(a,b) {
  let count = 0
  for (let i=0; i<a.length; i += 1) {
    if (a.charAt(i)!==b.charAt(i)) count += 1; 
  }
  return count
}


//extra solution

const hamming = (a,b) => [...a].reduce((c,e,i)=> c + (a[i] != b[i]),0); 
