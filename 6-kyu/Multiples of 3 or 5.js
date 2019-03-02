function solution(number){
 const result = [];
 
  for (let i = 3; i < number; i += 1) {
    if ( 0 === i % 3 || 0 === i % 5 ) {
      result.push( i );
    }
  }
  
  return result.reduce((acc,el) => acc + el,0);
}
