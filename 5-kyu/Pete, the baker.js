function cakes(recipe, available) {
   if (Object.keys(recipe).length > Object.keys(available).length) return 0

  const quantity = []

  for (const keyR in recipe) {
    if (recipe.hasOwnProperty(keyR)) {
      if (recipe[keyR] === 0) {
        quantity.push(0)
        continue
      }

      for (const keyA in available) {
        if (available.hasOwnProperty(keyA)) {
          if (keyR === keyA)
            quantity.push(
              Math.floor(available[keyA] / recipe[keyR])
            )
        }
      }
    }
  }

  return Math.min(...quantity)
}
