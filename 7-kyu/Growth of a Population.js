function nbYear(p0, percent, aug, p) {
  let count = 0;
  while (p0<p) {
    p0 = (p0 + (p0*(percent/100)))+ aug
  count += 1
  }
return count
}
