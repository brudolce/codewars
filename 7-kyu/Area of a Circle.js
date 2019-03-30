const circleArea = radius =>
  radius <= 0 || typeof radius !== 'number'
    ? false
    : Number((Math.PI * Math.pow(radius, 2)).toFixed(2))
