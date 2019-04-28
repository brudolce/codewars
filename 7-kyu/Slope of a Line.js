const getSlope = ([x1, y1], [x2, y2]) =>
  x2 - x1 === 0 ? null : (y2 - y1) / (x2 - x1)
