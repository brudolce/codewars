function guessGifts(wishlist, presents) {
  return wishlist.filter(
  whish => presents.some(
        present =>
          present.size === whish.size &&
          present.clatters === whish.clatters &&
          present.weight === whish.weight
      )
    ).map(whish => whish.name)
}
