const calculateVolume = (cuboid = [1, 1, 1]) =>
  cuboid.reduce((total, value) => total * value, 1)

const findDifference = (a, b) =>
  Math.abs(calculateVolume(a) - calculateVolume(b))
