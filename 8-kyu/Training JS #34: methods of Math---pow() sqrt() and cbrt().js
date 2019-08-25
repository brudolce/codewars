const isIntegerCube = n => Number.isInteger(Math.cbrt(n))

const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n)
