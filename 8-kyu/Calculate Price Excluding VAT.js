const excludingVatPrice = price =>
  price === null ? -1 : Number((price / 1.15).toFixed(2))
