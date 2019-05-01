function weatherInfo (temp) {
  const celsius = convertToCelsius(temp)

  return celsius < 0
    ? `${celsius} is freezing temperature`
    : `${celsius} is above freezing temperature`
}

function convertToCelsius (temperature) {
  return (temperature - 32) * (5/9)
}
