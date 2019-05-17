function calculator(a,b,sign){
  if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}

//clever stuff
const calculator = (a, b, sign) => {
  try {
    return eval(`${a} ${sign} ${b}`)
  } catch (err) {
    return 'unknown value'
  }
}
