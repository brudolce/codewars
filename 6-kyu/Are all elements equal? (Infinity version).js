function eqAll(iterable) {
  let last
  for (const i of iterable) {
    if (last === undefined) last = i
    if (i !== last) return false
  }
  return true
}
