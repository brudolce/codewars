const operations = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
}

const logicalCalc = (array, op) => array.reduce(operations[op])
