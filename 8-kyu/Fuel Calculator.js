const fuelPrice = (litres, pricePerLiter) => {
  let discountCents = 0
  if (litres >= 2) discountCents = 0.05
  if (litres >= 4) discountCents = 0.1
  if (litres >= 6) discountCents = 0.15
  if (litres >= 8) discountCents = 0.2
  if (litres >= 10) discountCents = 0.25
  const totalPrice = litres * pricePerLiter - litres * discountCents
  return Number(totalPrice.toFixed(2))
}

//clever solution
function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}
