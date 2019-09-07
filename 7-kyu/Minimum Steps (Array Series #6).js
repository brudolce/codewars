const minimumSteps = (numbers, value) =>
  [...numbers].sort((a, b) => a - b).filter(number => (value -= number) > 0).length
