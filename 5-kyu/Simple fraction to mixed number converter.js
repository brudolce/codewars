function mixedFraction(string){
  var nums = string.split('/');
  var num1 = parseInt(nums[0]);
  var num2 = parseInt(nums[1]);
  var quotient = null;
  var numerator = num1 % num2;
  var denominator = num2;
  
  function gcd(deno, nume){
      if(nume % deno === 0){
        return deno;
      }else{
        deno = deno % nume;
        return gcd(nume, deno);
      }
    }
  let factor = Math.abs(gcd(denominator, numerator));
  denominator /= factor;
  numerator /= factor;
  
  if(denominator < 0 && numerator < 0){
    denominator = Math.abs(denominator);
    numerator = Math.abs(numerator);
  }else if((denominator < 0 && numerator > 0)){
    denominator = Math.abs(denominator);
    numerator = 0 - numerator;
  }
  
  if(num2 === 0){
    throw new Error(['Zero Division Error']);
  }
  
  if((num1 % num2) === 0){
    return (num1/num2).toString();
  }else{
    if((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)){
      quotient = Math.floor(num1 / num2);
    }else{
      quotient = Math.ceil(num1 / num2);
    }
    
    if(!quotient){
      return numerator.toString() + '/' + denominator.toString();
    }else{
      return quotient.toString() + ' ' + (Math.abs(numerator)).toString() + '/' + (Math.abs(denominator)).toString();
    }
    
  }
}
