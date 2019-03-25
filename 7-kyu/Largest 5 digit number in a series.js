function solution(digits){
  let result = 0;  
  for (let i=0; i<digits.length; i += 1) {
    let comp = digits.substr(i, 5);
    if(Number(comp) > result){       
      result = Number(comp);
    }
  }
  return result;
}
