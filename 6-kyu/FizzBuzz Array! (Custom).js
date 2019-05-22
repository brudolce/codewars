var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  let array = [];

  if (typeof stringOne !== "string") stringOne = "Fizz";
  if (typeof stringTwo !== "string") stringTwo = "Buzz";
  if (typeof numOne !== "number") numOne = 3;
  if (typeof numTwo !== "number") numTwo = 5;
    
  for (var i = 1; i <= 100; i+=1) {
    if (i % numOne === 0 && i % numTwo === 0)
      array.push(stringOne + stringTwo);    
    else if (i % numOne === 0)
      array.push(stringOne);    
    else if (i % numTwo === 0)
      array.push(stringTwo);
    else array.push(i); 
  }
  return array;
};
