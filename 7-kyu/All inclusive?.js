const containAllRots = (strng, arr) =>
  [...strng].map((_, index) => `${strng.slice(index)}${strng.slice(0, index)}`)
    .every(el => arr.includes(el))
