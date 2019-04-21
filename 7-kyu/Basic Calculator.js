function calculate(num1, operation, num2) {
  if (operation === '+') return num1 + num2;
  if (operation === '-') return num1 - num2;
  if (operation === '*') return num2 === 0 ? 0 : num1 * num2
  if (operation === '/') return num2 === 0 ? null : num1 / num2;
  return null
}
